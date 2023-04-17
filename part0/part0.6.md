sequenceDiagram
    participant browser
    participant server
    participant database

    Note over browser: User enters text and clicks "Save"
    browser->>browser: Collect input text
    browser->>browser: Send POST request to server
    activate browser
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server->>database: INSERT new note data
    activate server
    activate database
    database-->>server: Confirmation of INSERT
    deactivate database
    server-->>browser: JSON response with new note data
    deactivate server
    browser->>browser: Add new note to SPA interface
    deactivate browser