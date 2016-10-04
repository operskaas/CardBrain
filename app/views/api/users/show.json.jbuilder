json.partial! 'api/users/user', user: @user

json.errors do
  json.array! @user.errors
end
