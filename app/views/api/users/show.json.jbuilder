json.currentUser do
  json.partial! 'api/users/user', user: @user
end

json.errors do
  json.array! @user.errors
end
