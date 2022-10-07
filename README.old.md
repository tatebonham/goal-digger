# goal-digger

Bucket List Application

## Description

A one stop shop for all your bucket list ideas! Plan your future goals and keep track of of those completed. See other's goals and steal them for your own ideas.

## Wireframe

## ERD
href="public/erd.jpeg"



## RESTful Routes

### Users
| HTTP METHOD (_Verb_) | URL (_Nouns_)            | CRUD | Response                                                    | Notes |
| -------------------- | -------------            | ---- | --------                                                    | ----- |
| GET                  | /users/new               | R    | a form for creating a new user                              |       |
| POST                 | /users                   | C    | create new user                                             |       |
| GET                  | /users/:profile          | R    | show user's profile                                         |       |
| GET                  | /users/:profile/edit     | R    | a form for editing the user's profile                       |       |
| PUT                  | /users/:profile          | U    | edit the user's profile                                     |       |
| GET                  | /users/login             | R    | show a login form                                           |       |
| POST                 | /users/login             | C    | accept a payload of form data and use it to login the user  |       |
| GET                  | /users/logout            | R    | logout a user by clearing the stored cookie                 |       |

### Bucketlist Goals
| HTTP METHOD (_Verb_) | URL (_Nouns_)              | CRUD | Response                                                  | Notes |
| -------------------- | -------------              | ---- | --------                                                  | ----- |
| GET                  | /goals/all                 | R    | show page of bucketlist items from the bucketlist API     |       |
| POST                 | /goals/:goalId             | C    | add goal to user's bucketlist                             |       |
| DELETE               | /goals/:goalId             | D    | remove goal from user's bucketlist                        |       |
| GET                  | /goals/create              | R    | a form for creating a new bucketlist item                 |       |
| POST                 | /goals/create              | U    | create a new goal                                         |       |
| GET                  | /goals/edit                | R    | a form for editing a goal                                 |       |
| PUT                  | /goals/edit                | U    | edit a goal                                               |       |
| DELETE               | /goals/edit                | D    | delete a goal                                             |       |



## User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a list item with a title and description.
- As a signed in user, I would like to update my list item's title and description.
- As a signed in user, I would like to delete my list item.
- As a signed in user, I would like to see all my list items but not other users'.
- As a signed in user, I would like to cross off items to complete them.

## MVP

- Set up react client with routes
- Set up mongoose server
- Set up user authentication with password encryption
- Set up CRUD functionality for user
- Set up CRUD functionality for bucket list goal
- Add a carousel on the home page that rotates through different bucket list ideas
- Show a page of bucket list ideas
- Show the users profile with all bucket list goals they have been added.

## Stretch Goals

- See other peoples profiles with their added bucket list goals
- Be able to favorite other's bucket list goals and add that to the users own profile list
