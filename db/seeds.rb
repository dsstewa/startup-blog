# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
post_a = Blogpost.create(subject: "Black-Capped Chickadee", content: "Poecile Atricapillus", uuid: 1234568)
post_b = Blogpost.create(subject: "Some awesome blog title", content: "We raised 100M", uuid: 1555568)
post_c = Blogpost.create(subject: "another great blog title", content: "it is snowing in co", uuid: 1244468)
post_d = Blogpost.create(subject: "made another great title", content: "we are killing it", uuid: 1239998)

email_a = Contact.create(firstName: "Bill", lastName: "Ron", email: "Bill@bill.com", uuid: 1239998)
email_b = Contact.create(firstName: "Ron", lastName: "Johnson", email: "Ron@Johnson.com", uuid: 1239998)
