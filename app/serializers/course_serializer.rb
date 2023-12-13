class CourseSerializer < ActiveModel::Serializer
  attributes :id,:title,:price,:description,:location,:teacher_id
  has_many :students, through: :enrollments
  has_many :enrollments

end
