# Tandem - Technical Test

We are excited to see your skills in action. This test will help us understand your approach to coding, UI/UX design, and creativity. You have 2 hours to complete this task, so feel free to make trade-offs and prioritize as you see fit. Remember, we value creativity in your solutions!

## Task Overview
You will be creating a widget that guides the user through a series of actions on an e-commerce website, "Never Alone," which specializes in tandem bikes. The widget should highlight specific elements in sequence, allowing the user to interact with them step-by-step.
The user must:
1. Add a Mountain Master bike to the cart
2. Add a Beach Cruiser bike to the cart
3. Access the cart
4. Remove the Beach Cruiser from the cart
5. Click on Validate

### Detailed Steps
- Highlight "Add to cart" button for Mountain Master:
  - Start by highlighting the "Add to cart" button for the Mountain Master bike.
  - Once the user clicks this button, remove the highlight and proceed to the next step.

- Highlight "Add to cart" button for Beach Cruiser:
  - Highlight the "Add to cart" button for the Beach Cruiser bike.
  - Once the user clicks this button, remove the highlight and proceed to the next step.

- Highlight the Pay button:
  - Highlight the "Pay" button to guide the user to the cart.
  - Once the user clicks this button, remove the highlight and proceed.

- Highlight the Remove button for the Beach Cruiser:
  - Highlight the remove button for the Beach Cruiser bike in the cart.
  - After the user removes the Beach Cruiser from the cart, remove the highlight and proceed.

- Highlight the Validate button:
  - Highlight the "Validate" button to guide the user to the checkout.
  - Create a special effect (e.g., animation, alert) when the user clicks on "Validate" to signify the completion of the process.

Please add anything else you think would enrich the experience! We're eager to see it.

## Requirements
- The widget should be as much integrated into the website as possible but must be totally independent and must not use any CSS class from the website.
- The code of the widget must be entirely concentrated into `Widget.tsx`.

## Instructions
- Clone the repository: https://github.com/tandem-ai/technical-test
- Install dependencies: `npm install`
- Start the project: `npm run dev`
- Complete the Widget: implement the `Widget.tsx` file based on the requirements and user journey described above. **Do not modify the other files!**

Once you finished, send us back a link to your repo. Please include a document and/or anything else to justify your product and technical choices.

We look forward to seeing your implementation! Good luck, and remember to prioritize and make trade-offs as you see fit.
