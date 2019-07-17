---
title: General project specs
layout: default
---

## MO:VES Project General Specifications

This was most recently revised on July 16, 2019. 

<mark>This document is being edited.<br>This notice will be removed when the edits are complete.</mark>

<br>

### Parsing the asks by the sponsor/client

This is an attempt to parse the asks by the sponsor/client, and determine the *design and coding impact* on the app, and on the web service ("WS" in the table below). The info was taken from the [project description](moves-project-description) and the [web site pages](https://cfvaa.com/). 

| Source | Statement | App impact | WS impact |
| --- | --- | --- | --- |
Web | (local and foreign volunteers) | Localized UI | Localized data
Both | No safety services | Info, contact<br>Easy access to a way to contact someone | Logging maybe
Both | Local info | Available offline | Can be updated
Descr. | Use provided wireframes | Known starting point | 
Descr. | Translate | Easy UI switching<br>Available offline | Multi-language 
Descr. | Location | In-app, or work with device app | Logging maybe
Descr. | Call button | Launch device app | Logging maybe 
Descr. | Push notifications | In-app, and/or work with device app | Must be initiated centrally and logged 
Descr. | Messages for MO:VES staff | In-app, and or work with device app | Logging maybe 
Descr. | Technical requrements | Must implement | Must support
Web | Foreign volunteer challenges during stay | Info with basic human needs | Must support

Now, move on to the specs documents for:
* The [app](moves-project-app-specs) 
* The [web service](moves-project-webapi-specs) 

<br>

### Other related general info

#### Wireless service in Morocco

Must learn something about this.  

Professor had a brief look at this; Google search words were:  
```sim card data plan morocco```  
[This](https://www.finder.com/ca/best-prepaid-sim-card-morocco) was one of the articles (from October 2017).  
The suggestion is that service in Morocco is inexpensive.  
This informs our design, perhaps about location services and inter-person communication services, because getting access to that data would be cheap. 

<br>

#### Country and language coding

The ISO 3166 standard defines codes for the names of countries worldwide. We will plan to use the two-letter codes, for example:
* CA - Canada 
* DK - Denmark
* MA - Morocco

The ISO 639 standard defines codes for languages worldwide. We will plan to use the two-letter codes, but can be  expanded to include a region tag (which is a country code from above). For example: 
* ar - Arabic
* en-CA - English in Canada  
* fr-CA - French in Canada  

Often the region tag is in upper-case letters, but it should have no significance to us in the design and coding of software. 

When learning about this, you can scan both the Wikipedia-like resources and the official ISO resources. 

<br>
