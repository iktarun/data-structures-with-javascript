## Checkout Web.dev course for more details

- Definition:

The SOLID principles were developed to combat these problematic design patterns.

The broad goal of the SOLID principles is to reduce dependencies so that engineers change one area of software without impacting others. Additionally, they’re intended to make designs easier to understand, maintain, and extend. Ultimately, using these design principles makes it easier for software engineers to avoid issues and to build adaptive, effective, and agile software.

## S.O.L.I.D. STANDS FOR:

S — Single responsibility principle
O — Open closed principle
L — Liskov substitution principle
I — Interface segregation principle
D — Dependency Inversion principle

# Single responsibility principle

A class should have one and only one reason to change, meaning that a class should only have one job.

# Open-closed Principle

Objects or entities should be open for extension, but closed for modification.

# Liskov substitution principle

Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.
All this is stating is that every subclass/derived class should be substitutable for their base/parent class.
For example we want to make the same function in sub class it should not break and should be an extension of
its parent

# Interface segregation principle

A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

# Dependency inversion principle

Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.

See the image Dependecy-Inversion-Principle.PNG

If you see this image we suppose we are using stripe for payment and later on we want to use paypal
in that case we have to make so much changes in store code to adapt that instead we can introduce one
more component in between as Payment Processor which will interact with source and payment gatway

https://www.youtube.com/watch?v=9oHY5TllWaU

# Links

- https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa

- https://www.youtube.com/watch?v=9oHY5TllWaU
