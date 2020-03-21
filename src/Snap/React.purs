module Snap.React where

import Prelude

import Data.Functor.Contravariant (cmap)
import Effect (Effect)
import Effect.Aff.AVar (AVar)
import Effect.Aff.AVar as AVar
import Effect.Aff.Class (class MonadAff, liftAff)
import Effect.Class (liftEffect)
import Effect.Ref (Ref)
import Effect.Ref as Ref
import React.Basic (JSX) as R
import React.Basic.DOM (render) as R
import Routing.Hash (getHash, setHash)
import Snap (Target(..))
import Snap.Snapper (Snapper(..), Snapper')
import Web.DOM (Element)

refSnapper :: forall s m. MonadAff m => Ref s -> AVar Unit -> Snapper m s s
refSnapper ref sync = Snapper { get, put }
  where
  get = liftEffect $ Ref.read ref
  put u = do
    liftEffect $ Ref.write u ref
    _ <- liftAff $ AVar.put unit sync
    pure unit

reactTarget :: forall m. MonadAff m => Element -> AVar Unit -> Target m R.JSX
reactTarget e = cmap pure <<< reactTargetM e

reactTargetM :: forall m. MonadAff m => Element -> AVar Unit -> Target m (m R.JSX)
reactTargetM e sync = Target go
  where
  go v = do
    v' <- v
    liftEffect $ R.render v' e
    _ <- liftAff $ AVar.take sync
    pure (Target go)

url :: Snapper' Effect String
url = Snapper { get: getHash, put: setHash }
