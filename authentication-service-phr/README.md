# Ripple-QEWD-Microservices

Email: <code.custodian@ripple.foundation>

2017-18 Ripple Foundation Community Interest Company 

[http://ripple.foundation](http://ripple.foundation)

Author: Rob Tweed, M/Gateway Developments Ltd (@rtweed)

## PHR Authentication Service

This folder contains the code for the PHR Demo Authentication Microservice, which provides the Ripple interface to the Gov.UK Verify Authentication Service

Start up this container as a foreground process using the *rtweed/qewd-server* Docker Container:

       sudo docker run -it -p 8081:8080 -v ~/ripple/authentication-service-phr:/opt/qewd/mapped rtweed/qewd-server

or, to run it as a daemon process:

       sudo docker run -d -p 8081:8080 -v ~/ripple/authentication-service-phr:/opt/qewd/mapped rtweed/qewd-server

Note 1: the -p parameter defines the port mapping, using the convention:

      -p {external port}:{internal port}

The *qewd-server* container always uses port 8080 internally.  

The external port is for you to define.  You MUST ensure that it is accessible from the PHR Conductor service
and matches with its ms-hosts.json configuration. 


Note 2: if you're using a Raspberry Pi (RPi), use the RPi-specific Container: *rtweed/qewd-server-rpi*
