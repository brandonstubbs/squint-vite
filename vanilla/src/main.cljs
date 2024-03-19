(ns main
  (:require ["./counter" :refer [setup-counter]]))



(setup-counter (js/document.querySelector "#counter"))
