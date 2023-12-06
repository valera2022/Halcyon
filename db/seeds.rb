# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
    # t = Teacher.create
    # User.create(name:"mario",password:"123",entryable_type:"Teacher",entryable_id:t.id)
    # User.create!(name:"josue",password:"sdf") entryable: Teacher.new()
   
    User.create(
  entryable: Teacher.create,
  name: 'Kim',
  last_name:"Jim",
  username:"kjl",
  dob:"12/10/1999",
  password: 'Jane Kim'
)

User.create(
    entryable: Teacher.create,
    name: 'Pedro',
    last_name:"Perez",
    username:"PP",
    dob:"2/11/1999",
    password: 'opens'
  )


