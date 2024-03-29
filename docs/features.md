# features

```text

features
    user management
        user registration
        user authentication
    map
        create
            create a mind map that will contain a set of nodes, which are associated with the map
        view list
            view list of maps that user owns
        edit title
        delete
            deletes map record along with all associated nodes
        fully manipulatable with keyboard
    nodes
        create
        view
            put keyboard focus on multiple nodes
        edit
            node content
            re-order siblings
        delete
            keyboard focused

features-wishlist
    map file
        access management
            multi-user access
                access types
                    read
                    write
                access limitation
                    write access only available for 1 user at any given time
        search
        publish
    map editing
        node editing
            search node content and move focus to match
            undo previous change
            redo
                undo previous undo

features-deprecated
    multi-user management
        user registration
        user authentication
    maps
        fully manipulatable with keyboard
        create
            private
        view
            own
                ?viewport zoom in/out
                put keyboard focus on multiple nodes
                    trigger
                        shift + arrow keys
        edit
            own
                nodes
                    edit
                        node content
                        re-order siblings
                            trigger
                                Mac
                                    Command + up_arrow
                                    Command + down_arrow
                                Window
                                    Control + up_arrow
                                    Control + down_arrow
                        undo previous change
                            trigger
                                Mac
                                    Command + z
                                Windows
                                    Control + z
                        redo
                            undo previous undo
                            trigger
                                Mac
                                    Command + Shift + z
                                Windows
                                    Control + Shift + z
                    delete
                        keyboard focused
                        trigger
                            delete key
        delete
            own
                one

features-deprecated
    multi-user management
        user registration
        user authentication
    maps
        create
            select privacy
                private
                public
                open source
        view
            own
            other users'
                public
                open source
            viewport zoom in/out
            put focus on multiple nodes
        edit
            own
                nodes
                    edit
                        node content
                        re-order siblings
                        create links
                            link references external maps
                                                      ├─ own
                                                      └─ other users'
                                                             public
                                                             open source
                        undo
                            Mac
                                Command + z
                            Windows
                                Control + z
                        redo
                            Mac
                                Command + Shift + z
                            Windows
                                Control + Shift + z
                    delete
        delete
            own
                one
                multiple
    search maps
        scopes
            own
            public
                open source
    pull request maps
        send
        merge
    fully manipulatable with keyboard

```

