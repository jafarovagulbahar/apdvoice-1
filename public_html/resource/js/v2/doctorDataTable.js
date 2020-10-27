function doctorDataTable(){

 $('.dataTables_empty').css('display','none')

var table=$('#DoctorDataTable');
var id= Math.floor(Math.random()*9999999);
    var t=($('<tr>')
        .append($('<td>').append('1'))
        .append($('<td>').append($('<a>').addClass('question-icon dropdown-toggle').attr('id','apdQuestions'+id).attr('href','#').attr('data-toggle','dropdown').attr('aria-haspopup','true').attr('aria-expanded','false')
        .append($('<i>').addClass('fa fa-question')) )
        .append($('<div>').addClass('dropdown-menu dropMenuQues').attr('aria-labelledby','apdQuestions'+id)

        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal1').append('Şikayət'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal2').append('Anamnez'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal3').append('An.Vitae'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal4').append('Səs gigiyenası'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal5').append('Akustik Analiz'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal6').append('Aerodinamik qiymətləndirmə (Spirometry test)'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal7').append('Perseptual qiymətləndirmə'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal8').append('VHI'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal9').append('Səs ilə əlaqəli həyat keyfiyyət indeksi'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal10').append('RSI'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal11').append('RFS'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal12').append('SVHI'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal13').append('PVHI Part I-F'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal14').append('PVHI Part II-P'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal15').append('PVHI Part III-E'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal16').append('DI'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal17').append('CSI'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal18').append('EAT'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal19').append('Ümumi Lor müayinəsi'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal20').append('VLS nəticələri'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal21').append('EMG'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal22').append('Video əlavə et'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal23').append('Şəkil əlavə et'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal24').append('Digər'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal25').append('Diaqnoz'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal26').append('Müalicə (Konservativ)'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal27').append('Müalicə (Səs terapiyası)'))
        .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal28').append('Müalicə (Cərrahi)'))
           
        
        )  )


        .append($('<td>').append('1'))
        .append($('<td>').append('aa'))
        .append($('<td>').append('bb'))
        .append($('<td>').append('nn'))
        .append($('<td>').append('ff'))
        .append($('<td>').append('dd'))
        .append($('<td>').append('rr'))
        .append($('<td>').append('tt'))
        .append($('<td>').append('ee'))
        .append($('<td>').append('ww'))
      
      
        
        


    	)
      table.append(t); 
}



function PatientQuestion(){

     var patient=$('#patinetAddModalBody');
     var p=$('<div>').addClass('row')
     
         .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Patient ID'))
         .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','patientName')))
          
    
        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Səsdə Yorulma'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )
    
    
        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Səsdə İncələmə'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )
    
    
        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Səsdə Gərginlik'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )
     
        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Udqunmanın Çətinləşməsi'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )
    
        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Boğazda ağrı, batma hissi'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )
      
        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Səs batması'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )

        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Səsdə qalınlaşma'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )

        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Səsdə boğuqluq'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )
    
        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Səsdə Kobudluq'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )
    
        .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Tənginəfəslik'))
        .append($('<select>').addClass('noSearch selectStyle')
        .append($('<option>').addClass('active').append(''))
        .append($('<option>').append('Xeyir'))
        .append($('<option>').append('Beli'))
        .append($('<option>').append('---')) ) )
    
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('İzahat'))
        .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','')))
         
    
    
        patient.append(p); 
     }
    