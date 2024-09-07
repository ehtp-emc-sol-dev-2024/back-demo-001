const BACKEND_CONSULTANTS = 'https://url-de-votre-backend'; 

 

 // Show skills of the selected consultant 

    $(document).on('click', '.show-skills-btn', function() { 

        const consultantId = $(this).data('id'); 

        const consultantName = $(this).data('name'); 

        $.get(`${BACKEND_CONSULTANTS}/consultants/${consultantId}`, function(consultant) { 

            $('#consultant-list').hide(); 

            $('#skills-title').text(`Skills of ${consultantName}`); 

            currentSkills = consultant.skills; 

            $('#skills-list').empty(); 

            consultant.skills.forEach(skill => { 

                $('#skills-list').append(`<li class="list-group-item">${skill}</li>`); 

            }); 

            $('#skills-view').show(); 

            $('#back-btn').show(); 

        }); 

    }); 

 

    $('#back-btn').click(function() { 

        $('#skills-view').hide(); 

        $('#back-btn').hide(); 

        $('#missions-view').hide();  // Hide the missions list when going back 

        loadConsultants(); 

    }); 

    // Suggest missions based on skills 

   $('#suggest-missions-btn').click(function() { 

        $.ajax({ 

            url: `${BACKEND_INTELL_MISSION_PROPOSER}/suggest-missions`, 

            type: 'POST', 

            contentType: 'application/json', 

            data: JSON.stringify({ skills: currentSkills }), 

            success: function(missions) { 

                $('#missions-list').empty(); 

                if (missions.length > 0) { 

                    missions.forEach(mission => { 

                        $('#missions-list').append(`<li class="list-group-item">${mission.name}</li>`); 

                    }); 

                } else { 

                    $('#missions-list').append(`<li class="list-group-item">No matching missions found</li>`); 

                } 

                $('#missions-view').show(); 

            }, 

            error: function() { 

                alert('Error suggesting missions.'); 

            } 

        }); 

    }); 
