(ns main
  (:require
   ["react-dom/client" :as rdom]
   ["./Counter" :refer [Counter]]))



(def root (rdom/createRoot (js/document.getElementById "app")))
(.render root #jsx [Counter])
