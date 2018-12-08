json.set! user.id do
    json.extract! user, :username, :password
end