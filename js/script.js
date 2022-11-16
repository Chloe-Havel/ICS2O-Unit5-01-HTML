// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML/",
    }
  )
}

const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
  //process
  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + "You got it! Good job."
  }
  // block of code to be executed if condition1 is true
  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML =
      "the answer was, " + randomNumber + "!" + "Nice guess, but try again."
  }
}
