function validateForm() {
            if (document.getElementById('fullName').value.trim() === '' || document.getElementById('fullName').value.trim().length < 3) {
                alert('⚠️ Please enter your full name (minimum 3 characters)');
                document.getElementById('fullName').focus();
                return false;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value.trim())) {
                alert('⚠️ Please enter a valid email address');
                document.getElementById('email').focus();
                return false;
            }

            if (!/^\d{10}$/.test(document.getElementById('phone').value.trim().replace(/\D/g, ''))) {
                alert('⚠️ Please enter a valid 10-digit phone number');
                document.getElementById('phone').focus();
                return false;
            }

            if (document.getElementById('dob').value === '') {
                alert('⚠️ Please select your date of birth');
                document.getElementById('dob').focus();
                return false;
            }

            if ((new Date().getFullYear() - new Date(document.getElementById('dob').value).getFullYear()) < 16) {
                alert('⚠️ You must be at least 16 years old to register as a volunteer');
                document.getElementById('dob').focus();
                return false;
            }

            if (!document.querySelector('input[name="gender"]:checked')) {
                alert('⚠️ Please select your gender');
                return false;
            }

            if (document.getElementById('address').value.trim() === '' || document.getElementById('address').value.trim().length < 10) {
                alert('⚠️ Please enter your complete address (minimum 10 characters)');
                document.getElementById('address').focus();
                return false;
            }

            if (document.getElementById('availability').value === '') {
                alert('⚠️ Please select your availability');
                document.getElementById('availability').focus();
                return false;
            }

            if (document.querySelectorAll('input[name="interest"]:checked').length === 0) {
                alert('⚠️ Please select at least one area of interest');
                return false;
            }

            if (document.getElementById('motivation').value.trim() === '' || document.getElementById('motivation').value.trim().length < 20) {
                alert('⚠️ Please tell us why you want to volunteer (minimum 20 characters)');
                document.getElementById('motivation').focus();
                return false;
            }

            if (document.getElementById('emergencyName').value.trim() === '' || document.getElementById('emergencyName').value.trim().length < 3) {
                alert('⚠️ Please enter emergency contact name (minimum 3 characters)');
                document.getElementById('emergencyName').focus();
                return false;
            }

            if (!/^\d{10}$/.test(document.getElementById('emergencyPhone').value.trim().replace(/\D/g, ''))) {
                alert('⚠️ Please enter a valid 10-digit emergency contact phone number');
                document.getElementById('emergencyPhone').focus();
                return false;
            }

            if (document.getElementById('relationship').value.trim() === '') {
                alert('⚠️ Please enter your relationship with the emergency contact');
                document.getElementById('relationship').focus();
                return false;
            }

            if (!document.getElementById('agreement').checked) {
                alert('⚠️ Please agree to the terms and conditions to proceed');
                document.getElementById('agreement').focus();
                return false;
            }

            alert('✅ Form submitted successfully! Thank you for registering as a volunteer. 🎉');
            document.getElementById('volunteerForm').reset();
            return false;
        }