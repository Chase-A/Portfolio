
$('.tab').click(function() {
    
    for(i = 0; i < 5; i++){
        const sec = document.getElementById(`sec${i}`)
        sec.className = 'sec'

        $('.tab').removeClass('selected')
    }
    this.className += ' selected'

    const nextSectionId = 'sec' + this.id.slice(-1)
    console.log(nextSectionId)
    const nextSection = document.getElementById(nextSectionId)    
    nextSection.className += ' current-sec'

  });
