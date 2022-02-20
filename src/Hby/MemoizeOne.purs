module Hby.MemoizeOne where

foreign import memoizeOnce :: forall a. a -> a
