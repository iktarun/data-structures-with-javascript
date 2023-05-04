## About

Design patterns are a fundamental part of software development, as they provide typical solutions to commonly recurring problems in software design. Rather than providing specific pieces of software, design patterns are merely concepts that can be used to handle recurring themes in an optimized way.

# Important Links

- https://www.digitalocean.com/community/tutorial_series/javascript-design-patterns

## Creational

Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

- Constructor

- Prototype
  The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain.

- Factory
  With the factory pattern we can use factory functions in order to create new objects. A function is a factory function when it returns a new object without the use of the new keyword!

- Abstract Factory

- Singelton
  Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.
  ref: https://www.geeksforgeeks.org/singleton-design-pattern/

- Builder
  Builder pattern aims to “Separate the construction of a complex object from its representation so that the same construction process can create different representations.” It is used to construct a complex object step by step and the final step will return the object. The process of constructing an object should be generic so that it can be used to create different representations of the same object.

## Structural

Structural design patterns are concerned with how classes and objects can be composed, to form larger structures. The structural design patterns simplifies the structure by identifying the relationships. These patterns focus on, how the classes inherit from each other and how they are composed from other classes.

- Adapter

  Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator.

- Bridge

  The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.

- Composite

  The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.

- Decorator
- Facade

  he Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems. It is a simple pattern that may seem trivial but it is powerful and extremely useful. It is often present in systems that are built around a multi-layer architecture.

- Flyweight
- Proxy
- Module
  Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity.
  This design pattern reminds me of when I learned Java: Getting to give your function private functions and variables, while only exposing the functions and variables that are necessary. I have definitely used this design pattern multiple times in my career. Good to know it has a name...

## Behavioural

In software engineering, behavioral design patterns are design patterns that identify common communication patterns among objects. By doing so, these patterns increase flexibility in carrying out communication.

- Chain of Responsibility

  The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.

- Command

  The Command pattern encapsulates actions as objects. Command objects allow for loosely coupled systems by separating the objects that issue a request from the objects that actually process the request. These requests are called events and the code that processes the requests are called event handlers.

- Iterator

  The Iterator pattern allows clients to effectively loop over a collection of objects.

- Modeator
- Momento
- Observer

  The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling

- State
- Stratergy
- Template Method
- Visitor

## Links

# https://www.patterns.dev/posts/

# https://dev.to/twinfred/design-patterns-in-javascript-1l2l

# https://www.dofactory.com/javascript/design-patterns/builder
