json.set! user.id do
    json.extract! user, :username
end

# json extract! user, :username, :id