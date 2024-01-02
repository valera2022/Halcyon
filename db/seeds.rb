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
   
 t1 = User.create!(
  entryable: Teacher.create,
  name: 'Kim',
  last_name:"Jim",
  username:"kjl",
  dob:"12/10/1999",
  password: 'Jane Kim'
)

t2 = User.create!(
    entryable: Teacher.create,
    name: 'Pedro',
    last_name:"Perez",
    username:"PP",
    dob:"2/11/1999",
    password: 'openss'
  )


  User.create!(
    entryable: Student.create,
    name: 'Peter',
    last_name:"wash",
    username:"spiderman",
    dob:"2/11/1998",
    password: 'gun11df'
    
  )

  
  User.create!(
    entryable: Student.create, 
    name: 'Mario',
    last_name:"brother",
    username:"mario2020",
    dob:"2/11/1998",
    password: '1234567'
  )
   
  Course.create!(
    title:"Styling with CSS",
    price:0,
    description:"Cascading Style Sheets allows you to create great-looking web pages, but how does it work ?",
    date:"12/12/2023",
    location:"plaza lama",
    time: "2:00 PM",
    teacher_id:t1.id,

  )
     
  Course.create!(
    title:"HTMX",
    price:2,
    description:"HTMX allow us to create full-stack websites. It is a js library where we mainly use html with build in method to request from back-end.",
    date:"2/10/2023",
    location:"567 Samsom St",
    time: "3:00 PM",
    teacher_id:t1.id,

  )   
  Course.create!(
    title:"Ruby On Rails",
    price:0,
    description:"Rails is a full-stack framework. It is opinionated about and convention over configuration ",
    date:"12/09/2022",
    location:"1 Garret Avn",
    time: "9:00 AM",
    teacher_id:t1.id,

  )  
  Course.create!(
    title:"Baking weekend",
    price:10,
    description:"Come to learn baking with friends and famility",
    date:"03/04/2024",
    location:"milli's house",
    time: "10:00 AM",
    teacher_id:t2.id,

  )   
  Course.create!(
    title:"Baseball and tricks",
    price:0,
    description:"Baseball is a complex game and here we will give you tricks to play it smart",
    date:"03/02/2022",
    location:"Yankee Stadium",
    time: "9:40 AM",
    teacher_id:t2.id,

  )   
  Course.create!(
    title:"Dominos mastery",
    price:0,
    description:"Domino is all about counting. Come and learn how the world champions play.",
    date:"04/03/2023",
    location:"My House",
    time: "10:00 PM",
    teacher_id:t2.id,

  )
  # course = current_teacher.courses.create!(strong_params)
  # render json: course



