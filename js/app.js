// Sample data for medicine and doctors
const medicines = [
    { name: "Aspirin", description: "Pain reliever", uses: "Used to reduce fever and pain.", sideEffects: "Upset stomach", price: "$5" },
    { name: "Paracetamol", description: "Pain reliever", uses: "Used to relieve mild to moderate pain.", sideEffects: "Liver damage with overdose", price: "$3" },
    // Add more medicines as required
];

const doctors = [
    { name: "Dr. John Doe", specialty: "Cardiology", location: "New York", experience: "10 years", reviews: "4.5/5", availability: "Mon-Fri" },
    { name: "Dr. Jane Smith", specialty: "Dermatology", location: "Los Angeles", experience: "8 years", reviews: "4.8/5", availability: "Mon-Sat" },
    // Add more doctors as required
];

// Function to search for medicines
function searchMedicines() {
    const searchQuery = document.getElementById('medicine-search').value.toLowerCase();
    const filteredMedicines = medicines.filter(medicine => medicine.name.toLowerCase().includes(searchQuery));
    const resultContainer = document.getElementById('medicine-results');
    resultContainer.innerHTML = '';
    filteredMedicines.forEach(medicine => {
        const medicineCard = document.createElement('div');
        medicineCard.className = 'bg-white p-4 rounded-lg shadow-md';
        medicineCard.innerHTML = `
            <h3 class="text-xl font-bold">${medicine.name}</h3>
            <p><strong>Description:</strong> ${medicine.description}</p>
            <p><strong>Uses:</strong> ${medicine.uses}</p>
            <p><strong>Side Effects:</strong> ${medicine.sideEffects}</p>
            <p><strong>Price:</strong> ${medicine.price}</p>
        `;
        resultContainer.appendChild(medicineCard);
    });
}

// Function to search for doctors
function searchDoctors() {
    const specialty = document.getElementById('doctor-specialty').value.toLowerCase();
    const location = document.getElementById('doctor-location').value.toLowerCase();
    const filteredDoctors = doctors.filter(doctor => 
        doctor.specialty.toLowerCase().includes(specialty) && doctor.location.toLowerCase().includes(location)
    );
    const resultContainer = document.getElementById('doctor-results');
    resultContainer.innerHTML = '';
    filteredDoctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'bg-white p-4 rounded-lg shadow-md';
        doctorCard.innerHTML = `
            <h3 class="text-xl font-bold">${doctor.name}</h3>
            <p><strong>Specialty:</strong> ${doctor.specialty}</p>
            <p><strong>Location:</strong> ${doctor.location}</p>
            <p><strong>Experience:</strong> ${doctor.experience}</p>
            <p><strong>Reviews:</strong> ${doctor.reviews}</p>
            <p><strong>Availability:</strong> ${doctor.availability}</p>
        `;
        resultContainer.appendChild(doctorCard);
    });
}
