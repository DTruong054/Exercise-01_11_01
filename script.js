/*  Exercise 01_11_01

    Whole Spectrum Energy Solutions
    Author: Daniel Truong
    Date:   8.28.18

    Filename: script.js
*/

"use strict";

// global variables
var selectedCity = "Tucson, AZ";
var weatherReport; //Hold our response data
var httpRequest = false; //Used to tell if XHR object exists

//Function to instantiate XHR object
function getRequest() {
    try {
        httpRequest = new XMLHttpRequest();
    } catch (error) {
        document.querySelector("p.error").innerHTML = "Forcast is not supported by your browser.";
        document.querySelector(p.error).style.display = "block";
        return false;
    }
    return httpRequest;
}
//Functon to process response data
function fillWeather() {
    //check response state for 4 and status 200
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        weatherReport = JSON.parse(httpRequest.responseText);
    }
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateValue = new Date(weatherReport.daily.data[0].time);
    var dayOfWeek = dateValue.getDay();
    var rows = document.querySelectorAll("section.week table tbody tr");
    document.querySelector("section.week table caption").innerHTML = selectedCity;
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
    httpRequest.open("get", "solar.php?" + "lat=" + latitude + "&lng=" + longitude, true);
    //Send request server
    httpRequest.send(null);
    httpRequest.onreadystatechange = fillWeather;
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

//This was not looking good for Adam he needed to find away to take out that sniper silently. One way taht eh thought of was activating the crane that he was on. He was planning on crashing the crane down and killing the sniper along with the crane. This would also give a nice obstruction from the otehr 3 members. This would also give a shock and give him time to detonate the grenade. Adam told Stalker to hack into the crane and once the crane falls he would hack into the grenade. Stalker told him: "Are you sure you want to do that, this would make them target you, since you are now a threat." Hunter replied: "If I don't do this I will die." Stalker crashed down the crane, and Hunter detonated the grenade. This gave Adam the chance to run away and escape from the SSS. Adam got to the other boat and escaped. The remaining SSS called their boss Sang So Song. "Hello, Mr.Song. We let our target escaped". Sang So Song was furious. He stated: "Who did this, who dares to mess with me???" "Sir some fixer by the name of Hunter." Song: "How dare he? Who is he?". "I want all of you to come back here immediatly". The SSS returned to base after that. Adam called Eric: "Hey were did you go?". Eric told him near the Delmont Hotel. Adam has arrived to that hotel and didn't see Eric. He was about to go in untill someone grabbed his hand and was about to pull him. Adam fliped him over and pointed a gun at that person. Eric screamed: "wait, wait, wait". Adam said:"What are you doing?". Eric told him i was just trying to get your attention. Eric told Hunter all that he knew and Adam held his part of the bargin. Adam didn't really find any that intresting but he knew Stalker probabily got what Stalker needed. Stalker:"Alright did you find that little mission intresting HUnter?" Adam:"Not really, did you get what you wanted?" Stalker just laughed. He was confused on what Stalker ment by this. Stalker told him to go get some rest, he was done for the day. Adam returnd to his house and took a shower. Back at the SSS base 3 gunshots where heard. Then a voice: "Mr. Song was that really needed?" Sang So Song: "A public display of an execution was needed to give some 'insperation' for all who fail." Sang So song stated: "I want all hands on deck. I want this 'Hunter' dead, and forgotten. Now GET on it." Back at Adam's house he had just finshed showering. He then went to go grab some food from hsi fridge. He grabbed some chicken and then got a call from Stalker. Stalker: "Oi the SSS are now on to us." Adam just gave a sigh. Adam: "Do you really think they can track you Stalker? You are one of the best heckers i know." Stalker: "They might not becable to track me but what about yourself, they are looking for 'Hunter', not 'Stalker'." Adam: "I doubt that they are able to track me, i mean i was trained by Default." Stalker: "Default is one of the best fixers, and hackers i know but he is also secreative." Adam: "Hey have you found Default yet?" Stalker: "Are you still worried about your mentor?" Adam got up and said: "Whatever do you informatio on him or not? If not imma take your advice early, and im going to get some rest." Adam disconnected their call and went to get some sleep. After he woke up Adam was wondering what the SSS where up to and how they where tracking him. He decided to go and do some research on them. He got into his car and drove off to the docks. He saw some police there already trying to find out what happened. They were wondering what happend and why teh crane was like this. Adam asked about what happened and was anyone hurt. The police asked him who he was and Adam replied: "I worked here, I was wondering if one of my friends died." The police told him it seemed like there was a battle that happened, but there was no body or corpses. There was not even a gun. Adam thought that the SSS cleaned up. He was wondering how they got the corpses away in such a fast time. Adam was going to go bakc to the docks later once the cops leave. he went and got some food.