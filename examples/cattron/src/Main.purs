module Examples.CatTron.Main where

import Prelude

import Data.Maybe (maybe)
import Effect (Effect)
import Effect.Aff (error, launchAff_)
import Effect.Aff.AVar as AVar
import Effect.Exception (throwException)
import Examples.CatTron.State (snapper)
import Examples.CatTron.UI (app)
import Snap (encapsulate, snap)
import Snap.Component.SYTC (contraHoist, map) as C
import Snap.React (reactTargetM)
import Web.DOM (Element)
import Web.DOM.NonElementParentNode (getElementById)
import Web.HTML (window)
import Web.HTML.HTMLDocument (toNonElementParentNode)
import Web.HTML.Window (document)

-- Finding the DOM element we're going to render everything onto
element :: Effect Element
element = do
  mc <- window >>= document <#> toNonElementParentNode >>= getElementById "container"
  maybe (throwException (error "Couldn't find root element")) pure mc

main :: Effect Unit
main = do
  -- Find the DOM element and create an Ref to hold the application state
  e <- element
  launchAff_ $ do
    av <- AVar.empty
    -- Create the state manager and target from the resources above
    snapper <- snapper av
    let target = reactTargetM e av
    let cmp = C.map join $ encapsulate snapper $ C.contraHoist launchAff_ $ app
    -- Snap everything together
    snap cmp target
