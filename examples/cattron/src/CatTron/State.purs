module Examples.CatTron.State where

import Prelude

import Affjax (printError)
import Affjax as AX
import Affjax.ResponseFormat (json)
import Data.Argonaut (Json, decodeJson, (.:))
import Data.Bifunctor as Bifunctor
import Data.Either (Either(..), either)
import Data.Time.Duration (Milliseconds(..))
import Effect.Aff (Aff, delay)
import Effect.Aff.AVar (AVar)
import Snap.Machine.FeedbackLoop (FeedbackLoop)
import Snap.Machine.FeedbackLoop.Fetch as Fetch

type AppState = Fetch.State String String
type AppTransition = Fetch.Transition String String

topic :: String
topic = "cats"

randomGifUrl :: Aff (Either String String)
randomGifUrl = do
  r <- (map <<< map) _.body $ AX.get json $ baseUrl <> topic
  pure $ either (Left <<< printError) decodeImageUrl r
  where
  baseUrl = "https://api.giphy.com/v1/gifs/random?api_key=48o08S6XdWCosiQvS6RfM3Mh94uJYKVp&tag="

decodeImageUrl :: Json -> Either String String
decodeImageUrl s = Bifunctor.lmap show $ do
  obj <- decodeJson s
  dat <- obj .: "data"
  url <- dat .: "image_url"
  pure url

loadGif :: Aff (Either String String)
loadGif = do
  delay $ Milliseconds $ 1000.0
  result <- randomGifUrl
  pure result

gifLoader :: AVar Unit -> FeedbackLoop Unit Aff AppState AppTransition
gifLoader avar = Fetch.machine avar loadGif

initialState :: AppState
initialState = Fetch.initialState
