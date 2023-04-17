sequenceDiagram
    participant browser
    participant server
    participant database

    Note over browser: User enters text and clicks "Submit"
    browser->>browser: Collect input text
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>database: INSERT new note data
    activate database
    database-->>server: Confirmation of INSERT
    server-->>browser: 302 Redirect to /notes
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document with new note added
    deactivate server
