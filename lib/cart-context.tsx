"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";

export type CartLine = {
  id: string;
  productId: string;
  name: string;
  fabric: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
};

type CartState = { lines: CartLine[]; isOpen: boolean };

type CartAction =
  | { type: "ADD_LINE"; line: CartLine }
  | { type: "REMOVE_LINE"; id: string }
  | { type: "UPDATE_QTY"; id: string; quantity: number }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "TOGGLE" }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; lines: CartLine[] };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_LINE": {
      const existing = state.lines.find((l) => l.id === action.line.id);
      if (existing) {
        return {
          ...state,
          isOpen: true,
          lines: state.lines.map((l) =>
            l.id === action.line.id
              ? { ...l, quantity: l.quantity + action.line.quantity }
              : l
          ),
        };
      }
      return { ...state, isOpen: true, lines: [...state.lines, action.line] };
    }
    case "REMOVE_LINE":
      return { ...state, lines: state.lines.filter((l) => l.id !== action.id) };
    case "UPDATE_QTY":
      if (action.quantity <= 0)
        return { ...state, lines: state.lines.filter((l) => l.id !== action.id) };
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.id === action.id ? { ...l, quantity: action.quantity } : l
        ),
      };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "CLEAR":
      return { ...state, lines: [] };
    case "HYDRATE":
      return { ...state, lines: action.lines };
    default:
      return state;
  }
}

type CartContextValue = CartState & {
  subtotal: number;
  itemCount: number;
  addLine: (line: Omit<CartLine, "quantity"> & { quantity?: number }) => void;
  removeLine: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [], isOpen: false });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("siodhaga:cart:v1");
      if (stored) dispatch({ type: "HYDRATE", lines: JSON.parse(stored) });
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("siodhaga:cart:v1", JSON.stringify(state.lines));
    } catch {}
  }, [state.lines]);

  const addLine = useCallback(
    (line: Omit<CartLine, "quantity"> & { quantity?: number }) =>
      dispatch({ type: "ADD_LINE", line: { ...line, quantity: line.quantity ?? 1 } }),
    []
  );
  const removeLine = useCallback(
    (id: string) => dispatch({ type: "REMOVE_LINE", id }),
    []
  );
  const updateQuantity = useCallback(
    (id: string, quantity: number) => dispatch({ type: "UPDATE_QTY", id, quantity }),
    []
  );
  const openCart = useCallback(() => dispatch({ type: "OPEN" }), []);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE" }), []);
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const subtotal = useMemo(
    () => state.lines.reduce((s, l) => s + l.price * l.quantity, 0),
    [state.lines]
  );
  const itemCount = useMemo(
    () => state.lines.reduce((s, l) => s + l.quantity, 0),
    [state.lines]
  );

  return (
    <CartContext.Provider
      value={{
        ...state,
        subtotal,
        itemCount,
        addLine,
        removeLine,
        updateQuantity,
        openCart,
        closeCart,
        toggleCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
