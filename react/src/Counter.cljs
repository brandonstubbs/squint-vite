(ns Counter
  (:require ["react" :refer [useState]]))



(defn Counter []
  #jsx [:div
        (let [[state setState] (useState 0)]
          #jsx [:div "You clicked " state "times"
                [:button {:onClick (fn [[_ _ _ ]]
                                     (setState (inc state)))}
                 "Click me!"]
                [:ul (interpose " " ["Hello" "world!"])]])])
