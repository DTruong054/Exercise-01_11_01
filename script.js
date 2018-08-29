/*  Exercise 01_11_01

    Whole Spectrum Energy Solutions
    Author: Daniel Truong
    Date:   8.28.18

    Filename: script.js
*/

"use strict";

// global variables
var selectedCity = "Tucson, AZ";
var weatherReport;
var httpRequest = false; //Used to tell if XHR object exists

//Function to instantiate XHR object
function getRequest() {
    try {
        httpRequest = new XMLHttpRequest();
    } catch (error) {
        document.querySelector("p.error").innerHTML = "Forcast is not supported by your browser.";
        document.querySelector(p.error).style.display = "block";
        return;
    }
    return httpRequest;
}

//getWeather called on load event for default city or button click to selected city
function getWeather(evt) {
    var latitude;
    var longitude;
    if (evt.type !== "load") {
        if (evt.target) {
            selectedCity = evt.target.innerHTML;
        } else if (evt.srcElement) {
            selectedCity = evt.srcElement.innerHTML;
        }
    }
    if (selectedCity === "Tucson, AZ") {
        latitude = 37.7577;
        longitude = -122.4376;
    } else if (selectedCity === "Chicago, IL") {
        latitude = 41.8337329;
        longitude = -87.7321555;
    } else if (selectedCity === "Montreal, QC") {
        latitude = 45.5601062;
        longitude = -73.7120832;
    }
    //Check for XHR object
    if (!httpRequest) {
        httpRequest = getRequest();
    }
    //Clear any open requests
    httpRequest.abort();
    //Target requests to a resourse
    httpRequest.open("get", "solar.php?" + "lat=" + latitude + "&lng=" + longitude);
}
//Retrieve location cities from the page
var locations = document.querySelectorAll("section ul li");
//Added click event to <li> cities
for (var i = 0; i < locations.length; i++) {
    if (locations[i].addEventListener) {
        locations[i].addEventListener("click", getWeather, false);
    } else if (locations[i].attachEvent) {
        locations[i].attachEvent("onclick", getWeather);
    }
}

// Evenet listener onload call getWeather()
if (window.addEventListener) {
    window.addEventListener("load", getWeather, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", getWeather);
}

//There was a person who was named Adam Walker. He  was a "fixer". His dream was to buy a island. He wanted to live alone and away from socity. He was lazy but has a night job. He has to work with "Stalker". This person was a person who hired Adam for his skills at night. He was a trained killer. Adam's codename was "Hunter". Adam was just lazing down on the couch untill he gotten a messgae from "Stalker". Stalker said: Oi wake up, you have a new job to take. Adam was not really happy about this new jav that he was asigned. Adam said: can't i just ignore this one? Stalker had to explain why he can't and it was a step closer to getting his isolated island. -sigh-. "fine" said Adam. He did not want anythign to do with today's job but wanted to retire early. Adam's job was to find this person named Eric and take his information and protect him. Adam has gone to the subway that he was suppost to meet his "contact". But once he got there he found that there were a bunch of people there that did not look like they were there for a subway ride. They had somthing in their ears. They had a ear peice. He was wondering who they were, he assumed they were cops first but then Stalker said wait. Stalker told him to get a picture of the earpeice. Adam did and Stalker did a search on the internet. Stalker found that it was a SoundEar3000. This was too expensive for the cops to have. These aren't normal detectives. Stalker hacked into the Subway cameras. Stalker needed one of their phoens to backtrace who these guys work for. Stalker said: hunter get close to one of them and stay near him os i can hack into his phone. Adam went close to one of them and sat next to one of them. He was going on his phone and getting ready for Stalker to hack into that person's phone. After a few moments the Subway stopped and Hunter got up to look for his contect. He left his phone on the bench for Stalker to finish hacking. The perosn who was getting hecked noticed that Hunter as forgotten his phone and tried to call to him. "Sir, sir; Sir you forgot your phone." Hunter asked Stalker if they where done hacking and Stalker replied "yes". Adam then used his second phone to detonate his phone. BOOM. People in the subway was shocked and while this confusion was happening Hunter found his contractor and shoved him back in the train. Eric was shocked on what was going on, Adam told Eric: "Shut up, I'm Hunter im here to protect you, but you need to give me information." Eric was scared and told Adam, ill give you everythng you want and then more, but only after we get to a safe location. Stalker was talking to Hunter about how those guys had very high security and this was going to take awhile to revel their idenity. Adam told Eric to trust him. Eric was wondering what this ment. Adam told Stalker to stop the train in 30 seconds. He then told Eric ot jump off the train once he tells him to. Eric was shocked and asked: "Are you crazy, we are moving at a very fast speed. This is INSANE". The train was about to stop. Adam told Eric to get ready. Adam said: "We only have a tight time to jump, the train can only stop for 5seconds". Eric was scepticle about this, but had no choice. Once the train stopped both of them jumped out of the train. They both landed in the waters below and both lived. they both swam to the docs. Stalker told them that they had prepared a escape boat for them. Once they have gotten to the docs, the people that were at teh subway were one step ahead of them. They where waiting for Adam and Eric. Adam told Eric to get on the ship and escape he would hold them off. The subway people asked who on earth Adam was. He told them he was Hunter, and he was the fixer that was the one that took on this contract. Stalker told Adam, that the people that are in front of him are the SSS or the Triple S. Their leader is called Sang So Song. A wealthy Korean. These people are the best of the best fixers. Stalker told Hunter to run away but he would not. He made a promise once he took the contract and would not go back on it. The battle between HUnter and SSS would begin. The SSS would take out their guns and start shooting, Adam took cover and started shooting back. He needed to use some of his utility to win. He could not just win a shooting contest. He asked Stalker to hack into a helicopter above him and give him an air view of the situation. He saw that he was surrounded by 7 men. He found that 3 guys where behind a crate, but one of them has a grenade. This was good for Adam because, he can hack into the grenade and detonate it himself. He would check out what was going on with the other 4 people. He found that one was a sniper and was trained on him. He needed to get rid of the sniper if he wanted to get out in scathed. The otehr 3 where scatted too far to be a threat to him. He needed a way to get rid of the sniper before he can detonate the grenade. The sniper would be scared and would not think he is safe like he is now. He would be harder to take out if that had happened.