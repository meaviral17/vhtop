// EmergencyContacts.ts

// Define the type for an emergency contact
export interface EmergencyContact {
    designation: string;
    name: string;
    contact: string;
  }
  
  // List of emergency contacts
  const emergencyContacts: EmergencyContact[] = [
    { designation: "Manager", name: "John Doe", contact: "123-456-7890" },
    { designation: "Supervisor", name: "Jane Smith", contact: "987-654-3210" },
    { designation: "Supervisor", name: "Jane Smith", contact: "987-654-3210" },
    { designation: "Supervisor", name: "Jane Smith", contact: "987-654-3210" },
    // Add more emergency contacts here if needed
  ];
  
  export default emergencyContacts;
  