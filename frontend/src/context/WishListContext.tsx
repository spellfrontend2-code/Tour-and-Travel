import {
  createContext,
  useContext,
  useState,

  type ReactNode,
} from "react";


type WishlistState = {
  blogs: number[];
  destinations: number[];
  tourPackages: number[];
};

type WishlistType = keyof WishlistState;

type WishListContextType = {
  wishlist: WishlistState;
  toggleWishlist: (
    type: WishlistType,
    id: number
  ) => void;
};

const WishListContext =
  createContext<WishListContextType | null>(null);

export function WishListProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<WishlistState>({
    blogs: [],
    destinations: [],
    tourPackages: [],
  });

const toggleWishlist = (
  type: WishlistType,
  id: number
) => {
  setWishlist((prev) => ({
    ...prev,
    [type]: prev[type].includes(id)
      ? prev[type].filter(
          (item) => item !== id
        )
      : [...prev[type], id],
  }));
};
return(
    <WishListContext.Provider value={{wishlist,toggleWishlist}}>
    {children}
    </WishListContext.Provider>)
}
export function useWishList() {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error(
      "useWishList must be used within WishListProvider"
    );
  }

  return context;
}
