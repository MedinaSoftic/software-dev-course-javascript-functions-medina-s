/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.
function attendee(name, role) {
    return `Name: ${name}, Role: ${role}`
}
console.log(attendee("Alice", "Speaker"));
// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

function calculateEventCost(attendees, costPerAttendee) {
    let totalCostOfAttendes = attendees * costPerAttendee;
    if (attendees > 100) {
        return `The 10% discount was applied, and the cost is now ${totalCostOfAttendes * 0.9}`;
    } else {
        return `There is no discount at this time,  the total cost is ${totalCostOfAttendes}`;
    }
}

console.log(calculateEventCost(101, 10));

// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}
console.log(isValidEmail("random@gmail.com"));
// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
//   inputs: name, role, attendees, costPerAttendee, email
//   outputs: formatted string, total cost, boolean
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases
// - Example test cases:
//console.log(attendee("Medina", "Programmer")); // Expected: Name: Medina, Role: Programmer
//console.log(calculateEventCost(99, 10)); // Expected: There is no discount at this time,  the total cost is 990
//console.log(isValidEmail("random.gmail.com")); // Expected: false

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?

//needs to be commented out or else it will throw the above statment into an error error

function calculateEventCost(attendees, costPerAttendee, discount) {
    let totalCostOfAttendes = attendees * costPerAttendee;
    let discountAmount = discount
    if (attendees > 100) {

        return `The discount was applied, and the cost is now ${totalCostOfAttendes * discountAmount}`;
    } else {
        return `There is no discount at this time,  the total cost is ${totalCostOfAttendes}`;
    }
}

console.log(calculateEventCost(101, 10, 0.5));