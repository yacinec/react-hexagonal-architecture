# React Hexagonal Architecture

This repo is an application of hexagonal architecture on a very simple React project.

The aim is to demonstrate the benefits of using hexagonal architecture on a frontend project. The business code is completely isolated from the framework. It can therefore run on Angular or VueJS.


## Project structure

Let's take a look at the project tree structure.

```
src/
├── components/  # Generic components such as button
│   
├── context/  # React contexts
│   
└── modules/  # Each hexagonal modules of the app
    └── todos  # Todos modules
        ├── application  # Contains the application use cases that orchestrate business actions.
        ├── domain  # Describes the business logic and defines the contracts (ports) that must be respected to interact with the domain.
        ├── infrastructure  # Contains technical implementations of domain contracts (adapters), in this case storage in localStorage.
        └── ui  # All components ui concerning the module todos.
```

## Application folder

In this folder, business actions will be used by ui components.
To do this, ui views use the `TodoContext` context to modify application data.
This context calls the `TodoService` in the `/application` folder.

The `TodoService` handles ui objects (the `Todo` entity) and objects sent to external infrastructures (TodoDTO).
The service uses a Mapper to map the various entities.

Still with a view to abstraction, the `TodoService` uses dependency injection to call a `TodoRepository`.
The service doesn't care which repository you're using, it could be a connection to an external API, or a simple manipulation of the localstorage.

In our example, I'm using localstorage for simplicity's sake.


## Domain folder

This folder contains the Todo business object and a repository interface `TodoRepository`.
The aim here is to keep as much abstraction as possible, so that the business code doesn't depend on the framework.
In our example, the code is very simple because the example is a boat, but we could imagine methods in the Todo object with
data manipulation, calculation or validation.


## Infrastructure folder

The `/infrastructure` folder contains the repository implementations.
This is where you'll find the code that allows you to interact with the outside world (APIs, localstorage, databases...).
There's not much to say about this folder.
Once again, our example is very basic, but we can imagine more complex code.
Finally, the advantage of this approach is that we can create a repository dedicated solely to testing our application with mocked or fake data.


## Ui folder

As its name suggests, this `/ui` folder corresponds to the views of the `todos` module.
The components in this folder do not correspond to generic components, but to the application's business components.
If we take the `TodoAdd` component as an example, it calls the `TodoContext` context to add a new task each time a user clicks.


## Go further

If you'd like to discuss this implementation further, or suggest another way of implementing this architecture, please don't hesitate to contact me. I find this subject fascinating and I'm always happy to talk about it.