class Course < ApplicationRecord
    validates :title,:price,:description,:date,:location,:time, presence: true
    validates :title, uniqueness: true
    validate :date_cannot_be_in_the_past
    # validates :date, inclusion: { in: (Date.today..Date.today+5.years) }
    # validate :date_not_in_past
    belongs_to :teacher
    has_many :enrollments , dependent: :destroy
    has_many :students, through: :enrollments
   

    def date_cannot_be_in_the_past
      if date.present? && date.past?
        errors.add(:date, "can't be in the past")
      end
    end    
    
    

    private
  
    # def date_not_in_past
    #   if :date.present? && :date < Date.current
    #     errors.add(:date, "can't be in the past")
    #   end
    # end
end
