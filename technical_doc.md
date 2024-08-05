# Technical Documentation for ButtonFinder and Widget Component

## Overview

This document provides a detailed explanation of the technical solution implemented in the React components `useButtonFinder` and `Widget`. These components work together to dynamically find and interact with specific buttons on a web page, offering a user-driven step-by-step interaction guide.

## Components and Functionality

### 1. `useButtonFinder` Hook

#### Purpose
The `useButtonFinder` hook is designed to locate a button on the page based on specific criteria and attach an event listener to it. The hook also manages the timing of the button's appearance on the page.

### 2. `Widget` Component

#### Purpose

The `Widget` component provides a step-by-step interactive guide to assist users with various actions on a webpage. It leverages the `useButtonFinder` hook to locate and interact with specific buttons, displaying explanations dynamically.

## Issues

- The main challenge was to dynamically locate the buttons on the page without relying on specific CSS classes or IDs. This required a more flexible and robust approach to button detection. So we should find a way to locate the buttons based on their text content and parent attributes. But sometimes like when we open modal, if we select multiple 'Beach Cruiser', it detect only the last one.

- When we show the explanation text, it can go outside of the screen. So we should find a way to keep the explanation text in the screen. To show it in depend of the button position (left, right, up, down). So to bypass this, I choose to show the explanation text in the bottom center of the button but it's not the best solution.

- If the user close the modal when the explanation text is shown, the explanation text should be shown again when the user open the modal again. This doesn't work.

- The explanation text shouldn't depends on setTimeout. If the button depends on a request, we should find a way to detect the button after the request is completed. Because now, it's based on setTimeout and if the request is longer than the setTimeout, it doesn't work. (We don't have this case in the subject but it's a good point to mention).
