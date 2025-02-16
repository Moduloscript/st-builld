# St Peter's Pharmacy Feature Implementation Plan

This document outlines the plan for developing a comprehensive app feature set for St Peter's Pharmacy, integrating Shopify and Paystack for seamless payment processing, enabling user authentication, and incorporating a blog section and communication features.

## Codebase Highlights

The existing codebase is a Next.js project using Tailwind CSS. Key directories and files include:

-   `src/app`: Contains the main application routes and pages.
-   `src/components`: Houses reusable UI components.
-   `src/components/features`: Contains feature-specific components.
-   `src/components/layouts`: Contains layout components like header and footer.
-   `src/lib`: Contains utility functions and constants.
-   `public`: Contains static assets like images and icons.

## Proposed Feature Implementation Plan

### 1. Payment Processing System

#### Shopify Integration

-   **Objective**: Integrate Shopify for e-commerce functionality.
-   **Implementation**:
    -   Create new `/shop` route for product catalog.
    -   Implement Shopify Storefront API to fetch product data.
    -   Develop product browsing and cart functionality.
    -   Implement a checkout flow.
-   **Code Impact**:
    -   New files in `src/app/shop/` and `src/components/shop/`.
    -   Utilize `src/lib/shopify/client.ts` for API interactions.

#### Paystack Integration

-   **Objective**: Integrate Paystack for secure payment processing.
-   **Implementation**:
    -   Configure Paystack API.
    -   Implement payment processing logic.
    -   Add transaction tracking.
    -   Create webhook for payment notifications.
-   **Code Impact**:
    -   New files in `src/lib/paystack/` for API interactions and webhook handling.
    -   Integration with the checkout flow in `src/components/shop/Checkout.tsx`.

### 2. User Authentication & Dashboard

#### Authentication System

-   **Objective**: Implement user authentication to grant customers access to their profiles and purchase history.
-   **Implementation**:
    -   Implement NextAuth.js for authentication.
    -   Add social login options (Google, Facebook).
    -   Create a user profile schema.
-   **Code Impact**:
    -   New files in `src/lib/auth/` for authentication logic.
    -   Integration with existing components for user profile management.

#### Dashboard Features

-   **Objective**: Create a personalized dashboard for users to view their purchase history, prescription details, and transaction records.
-   **Implementation**:
    -   Purchase history tracking.
    -   Prescription management.
    -   Transaction records display.
    -   Account settings management.
-   **Code Impact**:
    -   New files in `src/app/dashboard/` and `src/components/dashboard/` for dashboard components.
    -   Data fetching and display from Shopify and Paystack APIs.

### 3. Content Management System

#### Blog Implementation

-   **Objective**: Incorporate a blog section for users to view health-related articles and blog posts.
-   **Implementation**:
    -   Create `/blog` route.
    -   Implement a Markdown-based content system.
    -   Add categories and tags for organization.
    -   Implement search functionality.
-   **Code Impact**:
    -   New files in `src/app/blog/` and `src/components/blog/` for blog components.
    -   Utilize `src/lib/blog/markdown.ts` for Markdown parsing.

### 4. Communication System

#### Customer Support

-   **Objective**: Facilitate direct communication by allowing users to send messages to customer care or the pharmacy's official email.
-   **Implementation**:
    -   Create `/support` route.
    -   Implement a contact form.
    -   Add a ticket tracking system.
    -   Integrate email notifications.
-   **Code Impact**:
    -   New files in `src/app/support/` and `src/components/support/` for support components.
    -   Integration with an email service for sending notifications.

### 5. Infrastructure Enhancements

#### Cloudflare Integration

-   **Objective**: Utilize Cloudflare's developer platform and toolset to ensure optimal performance, scalability, and security.
-   **Implementation**:
    -   Configure Cloudflare Pages for deployment.
    -   Implement caching strategies.
    -   Set up security headers.
    -   Configure DDoS protection.
-   **Code Impact**:
    -   Configuration files for Cloudflare Pages.
    -   Optimized code for performance and security.

## Proposed File Structure Additions

```
src/
  app/
    shop/
      page.tsx
      [product]/
        page.tsx
    dashboard/
      page.tsx
      prescriptions/
        page.tsx
      orders/
        page.tsx
      settings/
        page.tsx
    blog/
      page.tsx
      [slug]/
        page.tsx
    support/
      page.tsx
      [ticket]/
        page.tsx
  components/
    shop/
      ProductCard.tsx
      Cart.tsx
      Checkout.tsx
    dashboard/
      ProfileSection.tsx
      PrescriptionList.tsx
      OrderHistory.tsx
    blog/
      BlogPost.tsx
      CategoryFilter.tsx
    support/
      ContactForm.tsx
      TicketList.tsx
  lib/
    shopify/
      client.ts
      queries.ts
    paystack/
      client.ts
      webhooks.ts
    auth/
      options.ts
      providers.ts
    blog/
      markdown.ts
      content.ts