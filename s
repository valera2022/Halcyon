
[1mFrom:[0m /home/valera/development/codes/phase-5/halcyon/app/controllers/application_controller.rb:13 ApplicationController#authorize:

    [1;34m12[0m: [32mdef[0m [1;34mauthorize[0m
 => [1;34m13[0m:      binding.pry
    [1;34m14[0m:         [1;34m# u = session.exists?[0m
    [1;34m15[0m:         
    [1;34m16[0m:         [32mreturn[0m render [35mjson[0m: {[35merror[0m: [31m[1;31m"[0m[31mNot Authorized[1;31m"[0m[31m[0m},[35mstatus[0m: [33m:unauthorized[0m [32munless[0m session.include? current_user.entryable_id
    [1;34m17[0m:         [1;34m# return Rails.logger.info(session)[0m
    [1;34m18[0m: 
    [1;34m19[0m:     
    [1;34m20[0m:     
    [1;34m21[0m:   
    [1;34m22[0m:    
    [1;34m23[0m: 
    [1;34m24[0m: [32mend[0m

