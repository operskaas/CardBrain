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
title   	          |string	            |not null, indexed
owner_id      	    |integer	          |not null, foreign key (references users), indexed

## subject_follows

column name	        |     data type	    |   details
--------------------|-------------------|----------------------------
id	                |integer	          |not null, primary key
follower_id   	    |integer	          |not null, foreign key (references users), indexed
subject_id      	  |integer	          |not null, foreign key (references subjects), indexed

## decks

column name	        |     data type	    |   details
--------------------|-------------------|----------------------------
id	                |integer	          |not null, primary key
title   	          |string	            |not null, indexed
subject_id      	  |integer            |not null, foreign key (references subjects), indexed
objective   	      |text	              |

## confidence_ratings

column name	        |     data type	    |   details
--------------------|-------------------|----------------------------
id	                |integer	          |not null, primary key
card_id   	        |integer            |not null, foreign key (references cards)
user_id      	      |integer            |not null, foreign key (references subjects), indexed with card_id for uniqueness
rating 	            |integer            |not null

## cards

column name	        |     data type	    |   details
--------------------|-------------------|----------------------------
id	                |integer	          |not null, primary key
deck_id      	      |integer            |not null, foreign key (references decks), indexed
question_text       |string             |not null
answer_text  	      |string             |
