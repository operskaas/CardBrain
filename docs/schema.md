# Schema Information

## users

column name	        |     data type	    |   details
--------------------|-------------------|----------------------------
id	                |integer	          |not null, primary key
username	          |string	            |not null, indexed, unique
password_digest	    |string	            |not null
session_token	      |string	            |not null, indexed, unique


## subjects

column name	        |     data type	    |   details
--------------------|-------------------|----------------------------
id	                |integer	          |not null, primary key
title   	          |string	            |not null, indexed, unique
owner_id      	    |string	            |not null, foreign key (references users), indexed
description 	      |text	              |
