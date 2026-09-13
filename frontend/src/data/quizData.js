// Comprehensive C++ Question Bank based on syllabus.txt
// Unit 1: Concepts and Basics of C++ Programming (Sets 1-5, 75 MCQs)
// Unit 2: Pointers, Reference Variables, Arrays and String Concepts (Sets 1-5, 75 MCQs)
// Unit 3: File Operations, Constructors, and Destructors in C++ (Sets 1-5, 75 MCQs)
// Total 225 High-Quality C++ MCQs with Code Snippets & Explanations

export const SYLLABUS_UNITS = [
  {
    "id": "unit1",
    "title": "Unit I: Concepts and Basics of C++ Programming",
    "description": "OOP vs Procedural, cin/cout, Classes, Objects, Access Specifiers, Structs/Unions/Enums, Inline/Static functions, Friend functions, Function Overloading, Recursion, and Pass-by-Value/Address/Reference.",
    "sets": [
      {
        "id": "u1s1",
        "title": "Set 1: OOP & I/O Basics",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u1s2",
        "title": "Set 2: Classes, Objects & References",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u1s3",
        "title": "Set 3: Inline, Static & Manipulators",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u1s4",
        "title": "Set 4: Structs, Enums, Unions & Scope Rules",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u1s5",
        "title": "Set 5: Friend Functions, Overloading & Recursion",
        "difficulty": "medium",
        "questionCount": 15
      }
    ]
  },
  {
    "id": "unit2",
    "title": "Unit II: Pointers, Reference Variables, Arrays & String Concepts",
    "description": "Void pointers, Pointer Arithmetic, Pointer to Pointer, Memory hazards (Dangling/Wild/Null), this pointer, Array of Objects, std::string class, Multidimensional Arrays, and Pointers to Data Members.",
    "sets": [
      {
        "id": "u2s1",
        "title": "Set 1: Basic Pointers & Void Pointers",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u2s2",
        "title": "Set 2: Pointer Arithmetic & Basic Strings",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u2s3",
        "title": "Set 3: Pointer to Pointer & Memory Pitfalls",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u2s4",
        "title": "Set 4: Pointers in Classes & \"this\" Pointer",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u2s5",
        "title": "Set 5: Multidimensional Arrays, String Modifiers & Data Member Pointers",
        "difficulty": "medium",
        "questionCount": 15
      }
    ]
  },
  {
    "id": "unit3",
    "title": "Unit III: File Operations, Constructors, and Destructors in C++",
    "description": "File streams hierarchy (ios_base to fstream), open modes & state flags, text vs binary I/O, random access seeking, struct/class object persistence & hazards, constructors, deep copy, initializer lists, and RAII.",
    "sets": [
      {
        "id": "u3s1",
        "title": "Set 1: File Streams, Stream Hierarchy & Open Modes",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u3s2",
        "title": "Set 2: Stream State Flags, Error Handling & Text File I/O",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u3s3",
        "title": "Set 3: Sequential & Random Access, File Pointers & Binary Operations",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u3s4",
        "title": "Set 4: Struct & Class Object Persistence & Memory Safety",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u3s5",
        "title": "Set 5: Manager Functions (Constructors, Destructors) & RAII Pattern",
        "difficulty": "medium",
        "questionCount": 15
      }
    ]
  }
];

export const QUIZ_QUESTIONS = [
  {
    "id": "u1s1q1",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What will be the output of the following C++ program using cin and cout stream extraction/insertion?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    cout << a + b << \" \" << a * b;\n    return 0;\n}",
    "options": [
      "30 200",
      "1020 200",
      "30200",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "The standard output stream cout evaluates (a + b) to 30, inserts a space \" \", and then evaluates (a * b) to 200, resulting in \"30 200\"."
  },
  {
    "id": "u1s1q2",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "Which key feature distinguishes Object-Oriented Programming (OOP) from Procedural Programming paradigms?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Car {\nprivate:\n    int speed;\npublic:\n    void setSpeed(int s) { speed = s; }\n};",
    "options": [
      "Focus on functions and global data step-by-step",
      "Data encapsulation, binding data together with methods operating on it",
      "Execution starts from main() only in procedural programming",
      "Lack of support for user-defined data types"
    ],
    "correctAnswer": 1,
    "explanation": "OOP emphasizes Data Encapsulation, combining data (attributes) and methods (functions) inside classes to protect data from direct external modification."
  },
  {
    "id": "u1s1q3",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What is the default access specifier for members of a C++ class if none is specified?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Test {\n    int x; // What is the access specifier of x?\npublic:\n    Test() { x = 5; }\n};",
    "options": [
      "public",
      "protected",
      "private",
      "package-private"
    ],
    "correctAnswer": 2,
    "explanation": "In C++ classes, members are private by default. In C++ structs, members are public by default."
  },
  {
    "id": "u1s1q4",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What will be the output of the following code defining a simple class object?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Box {\npublic:\n    int length;\n    Box() { length = 15; }\n};\n\nint main() {\n    Box b1;\n    cout << b1.length;\n    return 0;\n}",
    "options": [
      "0",
      "15",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "When b1 is created, the default constructor initializes length to 15. Accessing b1.length via the dot operator prints 15."
  },
  {
    "id": "u1s1q5",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "Which stream operator is used with cin for reading user input in C++?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int val;\n    // Which operator goes here?\n    // cin ... val;\n}",
    "options": [
      "<< (Insertion operator)",
      ">> (Extraction operator)",
      "-> (Arrow operator)",
      ":: (Scope resolution)"
    ],
    "correctAnswer": 1,
    "explanation": "The >> operator is the stream extraction operator used with cin to read data from standard input."
  },
  {
    "id": "u1s1q6",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What will happen when attempting to compile the following code accessing private class members?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Sample {\n    int data = 100;\n};\n\nint main() {\n    Sample s;\n    cout << s.data;\n    return 0;\n}",
    "options": [
      "Prints 100",
      "Prints 0",
      "Compilation error: \"data\" is a private member of \"Sample\"",
      "Runtime error"
    ],
    "correctAnswer": 2,
    "explanation": "data is private by default in class Sample. Attempting to access s.data directly from main() causes a compilation error."
  },
  {
    "id": "u1s1q7",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What is the output of the code snippet below involving default constructor initialization?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Counter {\npublic:\n    int count;\n    Counter(int c = 10) {\n        count = c;\n    }\n};\n\nint main() {\n    Counter c1;\n    Counter c2(25);\n    cout << c1.count << \" \" << c2.count;\n    return 0;\n}",
    "options": [
      "10 25",
      "0 25",
      "25 25",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "c1 uses the default parameter value 10 for count. c2 explicitly passes 25, so the output is \"10 25\"."
  },
  {
    "id": "u1s1q8",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "In C++ I/O streams, which header file is required to use cin and cout?",
    "code": "#include <____>\nusing namespace std;\n\nint main() {\n    cout << \"Hello C++\";\n    return 0;\n}",
    "options": [
      "stdio.h",
      "iostream",
      "fstream",
      "iomanip"
    ],
    "correctAnswer": 1,
    "explanation": "<iostream> contains the declarations of standard input/output stream objects cin, cout, cerr, and clog."
  },
  {
    "id": "u1s1q9",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What will be printed by the following object creation and function call code?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Calculator {\npublic:\n    int add(int a, int b) {\n        return a + b;\n    }\n};\n\nint main() {\n    Calculator calc;\n    cout << calc.add(7, 8);\n    return 0;\n}",
    "options": [
      "15",
      "78",
      "0",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "calc.add(7, 8) evaluates 7 + 8 which returns 15 and prints it."
  },
  {
    "id": "u1s1q10",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "Which statement accurately describes an Object in C++?",
    "code": "// Example:\n// Car myCar; // myCar is an object of type Car",
    "options": [
      "An object is a blueprint or template for data",
      "An object is an instance of a class that occupies memory",
      "An object is a built-in data type like int or double",
      "An object can only contain member functions, not variables"
    ],
    "correctAnswer": 1,
    "explanation": "A class is the blueprint/type definition, while an Object is a real-world instance of that class that gets allocated in memory."
  },
  {
    "id": "u1s1q11",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What is the output of the following C++ code containing a member function?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Greet {\npublic:\n    void printMsg() {\n        cout << \"Welcome\";\n    }\n};\n\nint main() {\n    Greet g;\n    g.printMsg();\n    return 0;\n}",
    "options": [
      "Welcome",
      "Greet",
      "0",
      "Nothing is printed"
    ],
    "correctAnswer": 0,
    "explanation": "Calling g.printMsg() executes cout << \"Welcome\", outputting \"Welcome\"."
  },
  {
    "id": "u1s1q12",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "Which stream manipulator forces a newline character and flushes the output buffer?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Line 1\" << ______ << \"Line 2\";\n    return 0;\n}",
    "options": [
      "flush",
      "endl",
      "ends",
      "setw"
    ],
    "correctAnswer": 1,
    "explanation": "endl inserts a newline character into the output stream and flushes the output buffer."
  },
  {
    "id": "u1s1q13",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What is the main advantage of Object-Oriented Programming code reusability?",
    "code": "class Vehicle { /* ... */ };\nclass Bike : public Vehicle { /* Reuses Vehicle code */ };",
    "options": [
      "Pointers",
      "Inheritance",
      "Macros",
      "Global variables"
    ],
    "correctAnswer": 1,
    "explanation": "Inheritance allows a derived class to inherit properties and methods from a base class, promoting reusability."
  },
  {
    "id": "u1s1q14",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "What will be the output of the code snippet below?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Alpha {\n    int x;\npublic:\n    Alpha(int v) { x = v; }\n    int getX() { return x; }\n};\n\nint main() {\n    Alpha a(42);\n    cout << a.getX();\n    return 0;\n}",
    "options": [
      "42",
      "0",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "Alpha a(42) calls the parameterized constructor initializing private x to 42. getX() returns 42."
  },
  {
    "id": "u1s1q15",
    "unitId": "unit1",
    "setId": "u1s1",
    "difficulty": "easy",
    "question": "Which of the following is NOT a fundamental feature of OOP?",
    "code": "// C++ OOP Principles",
    "options": [
      "Encapsulation",
      "Polymorphism",
      "Inheritance",
      "Global Goto Jumps"
    ],
    "correctAnswer": 3,
    "explanation": "The four main pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism. Global Goto Jumps are unstructured programming constructs."
  },
  {
    "id": "u1s2q1",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What will be the output of the following program utilizing a C++ reference variable?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int &ref = x;\n    ref = 20;\n    cout << x << \" \" << ref;\n    return 0;\n}",
    "options": [
      "10 20",
      "20 20",
      "10 10",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "ref is an alias for x. Modifying ref to 20 changes x to 20. Both x and ref refer to the same memory location, printing \"20 20\"."
  },
  {
    "id": "u1s2q2",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "Which of the following syntax correctly declares a reference variable `ref` for integer `num`?",
    "code": "int num = 50;",
    "options": [
      "int &ref = num;",
      "int ref = &num;",
      "int *ref = num;",
      "reference<int> ref = num;"
    ],
    "correctAnswer": 0,
    "explanation": "In C++, a reference variable is declared using the & symbol: `int &ref = num;`."
  },
  {
    "id": "u1s2q3",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What is the output of the following code demonstrating Call by Value?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid modify(int n) {\n    n = n + 100;\n}\n\nint main() {\n    int val = 50;\n    modify(val);\n    cout << val;\n    return 0;\n}",
    "options": [
      "150",
      "50",
      "0",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "In Call by Value, a copy of `val` is passed to function `modify`. Changes made inside the function do not affect the original variable `val` in main."
  },
  {
    "id": "u1s2q4",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What is the output of the code demonstrating Call by Reference?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid modify(int &n) {\n    n = n + 100;\n}\n\nint main() {\n    int val = 50;\n    modify(val);\n    cout << val;\n    return 0;\n}",
    "options": [
      "150",
      "50",
      "100",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "Because parameter `n` is passed by reference (`int &n`), modifications inside `modify` directly alter the original variable `val` to 150."
  },
  {
    "id": "u1s2q5",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "Which access specifier makes class members accessible to derived classes but not outside the class hierarchy?",
    "code": "class Parent {\n_____:\n    int protectedData;\n};",
    "options": [
      "public",
      "private",
      "protected",
      "internal"
    ],
    "correctAnswer": 2,
    "explanation": "`protected` access specifier allows member access within the class itself and its derived (child) classes."
  },
  {
    "id": "u1s2q6",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What will happen if a reference variable is declared without initialization?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int &ref; // No initialization!\n    return 0;\n}",
    "options": [
      "Compiles fine and points to NULL",
      "Compiles fine and has garbage value",
      "Compilation error: reference must be initialized",
      "Runtime exception"
    ],
    "correctAnswer": 2,
    "explanation": "In C++, a reference variable MUST be initialized at the time of declaration because it cannot exist independently without referring to an object."
  },
  {
    "id": "u1s2q7",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What is the output of the following function call by address?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid update(int *ptr) {\n    *ptr = 99;\n}\n\nint main() {\n    int number = 10;\n    update(&number);\n    cout << number;\n    return 0;\n}",
    "options": [
      "10",
      "99",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "Passing `&number` (address of number) allows function `update` to dereference `ptr` (`*ptr = 99`), modifying `number` to 99."
  },
  {
    "id": "u1s2q8",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "Can a C++ reference variable be re-bound to refer to another variable after initialization?",
    "code": "int a = 10, b = 20;\nint &ref = a;\nref = b; // What does this line do?",
    "options": [
      "Yes, ref now points to b",
      "No, ref remains an alias for a, but the value of b (20) is assigned to a",
      "Causes a runtime crash",
      "Compilation Error: re-binding reference is illegal syntax"
    ],
    "correctAnswer": 1,
    "explanation": "A reference cannot be re-bound to another object. The assignment `ref = b` copies the value of `b` (20) into variable `a` referenced by `ref`."
  },
  {
    "id": "u1s2q9",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What will be the output of creating multiple objects of the following class?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Item {\npublic:\n    int id;\n    Item(int i) { id = i; }\n};\n\nint main() {\n    Item item1(101);\n    Item item2(102);\n    cout << item1.id + item2.id;\n    return 0;\n}",
    "options": [
      "203",
      "101",
      "102",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "item1.id is 101, item2.id is 102. Their sum 101 + 102 is 203."
  },
  {
    "id": "u1s2q10",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "Which of the following is TRUE regarding Call by Reference versus Call by Address in C++?",
    "code": "// Call by Address: void f(int *p);\n// Call by Reference: void f(int &r);",
    "options": [
      "Call by Reference requires explicit dereferencing (*r) inside the function",
      "Call by Address uses pointer syntax (&var and *ptr), while Call by Reference uses cleaner reference syntax",
      "Call by Address creates a copy of the actual object",
      "Call by Reference accepts NULL arguments"
    ],
    "correctAnswer": 1,
    "explanation": "Call by Address uses explicit pointers (`*`) and memory addresses (`&`), whereas Call by Reference provides cleaner alias syntax without needing explicit dereference operators."
  },
  {
    "id": "u1s2q11",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What is the output of the following code snippet?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Point {\n    int x, y;\npublic:\n    Point(int xVal, int yVal) : x(xVal), y(yVal) {}\n    void print() { cout << \"(\" << x << \",\" << y << \")\"; }\n};\n\nint main() {\n    Point p(3, 4);\n    p.print();\n    return 0;\n}",
    "options": [
      "(3,4)",
      "3,4",
      "(0,0)",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "The member initializer list `: x(xVal), y(yVal)` initializes x to 3 and y to 4, printing \"(3,4)\"."
  },
  {
    "id": "u1s2q12",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What happens when a member function is defined inside a class definition body by default?",
    "code": "class Demo {\npublic:\n    void display() { // Defined inside class\n        cout << \"Inside\";\n    }\n};",
    "options": [
      "It is automatically treated as an inline function candidate by the compiler",
      "It becomes a static function",
      "It causes a compilation error unless labeled inline",
      "It becomes a virtual function"
    ],
    "correctAnswer": 0,
    "explanation": "In C++, any member function defined inside the class declaration is implicitly considered an inline function candidate by the compiler."
  },
  {
    "id": "u1s2q13",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What is the output of the program below?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 5;\n    int &r1 = val;\n    int &r2 = r1;\n    r2 = 12;\n    cout << val;\n    return 0;\n}",
    "options": [
      "5",
      "12",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "r1 is a reference to val, and r2 is a reference to r1 (and thus val). Setting r2 = 12 updates val to 12."
  },
  {
    "id": "u1s2q14",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "Which access specifier allows maximum access to any part of the program?",
    "code": "class Example {\n_____:\n    int publicValue;\n};",
    "options": [
      "private",
      "protected",
      "public",
      "friend"
    ],
    "correctAnswer": 2,
    "explanation": "`public` members can be accessed from anywhere outside the class where the object is visible."
  },
  {
    "id": "u1s2q15",
    "unitId": "unit1",
    "setId": "u1s2",
    "difficulty": "easy",
    "question": "What will be printed by the following code?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid swapVals(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 1, y = 2;\n    swapVals(x, y);\n    cout << x << y;\n    return 0;\n}",
    "options": [
      "12",
      "21",
      "11",
      "22"
    ],
    "correctAnswer": 1,
    "explanation": "swapVals uses reference parameters, correctly swapping the original values of x and y so x becomes 2 and y becomes 1, printing \"21\"."
  },
  {
    "id": "u1s3q1",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What will be the output of the following program containing static data members?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Widget {\npublic:\n    static int count;\n    Widget() { count++; }\n};\n\nint Widget::count = 0; // Definition\n\nint main() {\n    Widget w1, w2, w3;\n    cout << Widget::count;\n    return 0;\n}",
    "options": [
      "0",
      "1",
      "3",
      "Compilation Error"
    ],
    "correctAnswer": 2,
    "explanation": "Static data members are shared across all instances of the class. Creating 3 objects (w1, w2, w3) increments `count` three times, outputting 3."
  },
  {
    "id": "u1s3q2",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What restriction applies to C++ Static Member Functions?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Test {\n    int nonStaticVal = 10;\n    static int staticVal;\npublic:\n    static void show() {\n        // Can static member functions access nonStaticVal directly?\n    }\n};",
    "options": [
      "Static member functions can access both static and non-static variables directly",
      "Static member functions can ONLY access static data members and static functions directly (they have no \"this\" pointer)",
      "Static member functions cannot return any value",
      "Static member functions must be defined inline inside the class only"
    ],
    "correctAnswer": 1,
    "explanation": "Static member functions do not receive an implicit `this` pointer, so they can only access static members directly."
  },
  {
    "id": "u1s3q3",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What is the primary objective of declaring a function as `inline` in C++?",
    "code": "inline int cube(int x) {\n    return x * x * x;\n}",
    "options": [
      "To prevent the function from being overridden in derived classes",
      "To eliminate function call overhead by expanding function code at the call site",
      "To allow the function to accept variable number of arguments",
      "To make the function execute asynchronously in a separate thread"
    ],
    "correctAnswer": 1,
    "explanation": "`inline` functions suggest compiler expansion of function body at call sites to avoid push/pop stack stack-frame overhead."
  },
  {
    "id": "u1s3q4",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What will be the output of using iomanip manipulators `setw` and `setfill`?",
    "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << setfill('#') << setw(5) << 42;\n    return 0;\n}",
    "options": [
      "42###",
      "###42",
      "#42#",
      "42"
    ],
    "correctAnswer": 1,
    "explanation": "`setw(5)` specifies a total field width of 5, right-justified by default. `setfill('#')` fills leading empty positions with \"#\", printing \"###42\"."
  },
  {
    "id": "u1s3q5",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What will happen if static data member is declared in class but NOT defined outside the class scope?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Account {\npublic:\n    static int totalAccounts; // Declaration only!\n};\n\nint main() {\n    cout << Account::totalAccounts;\n    return 0;\n}",
    "options": [
      "Prints 0",
      "Prints garbage value",
      "Linker Error (Undefined Reference to Account::totalAccounts)",
      "Compilation Error: static members are forbidden"
    ],
    "correctAnswer": 2,
    "explanation": "Static data members require a formal definition outside the class scope (e.g. `int Account::totalAccounts = 0;`). Omitting it results in a linker error."
  },
  {
    "id": "u1s3q6",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What is the output of the following static function execution?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass MathUtil {\npublic:\n    static int multiply(int a, int b) {\n        return a * b;\n    }\n};\n\nint main() {\n    cout << MathUtil::multiply(6, 7);\n    return 0;\n}",
    "options": [
      "42",
      "0",
      "Compilation Error: static function requires object instance",
      "Runtime error"
    ],
    "correctAnswer": 0,
    "explanation": "Static member functions can be called directly using class scope resolution `MathUtil::multiply(6, 7)` without creating an object instance."
  },
  {
    "id": "u1s3q7",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "When will the C++ compiler likely IGNORE the `inline` keyword request?",
    "code": "inline int calculateFactorial(int n) {\n    if (n <= 1) return 1;\n    return n * calculateFactorial(n - 1);\n}",
    "options": [
      "When the function contains recursive calls or complex loops",
      "When the function returns an integer",
      "When the function is called inside main()",
      "When the function takes more than 1 argument"
    ],
    "correctAnswer": 0,
    "explanation": "The `inline` keyword is a compiler hint. Compilers typically ignore inline requests for recursive functions, functions containing loops, switch statements, or large bodies."
  },
  {
    "id": "u1s3q8",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What will be the output of the floating-point manipulator `fixed` and `setprecision` code?",
    "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double pi = 3.14159265;\n    cout << fixed << setprecision(2) << pi;\n    return 0;\n}",
    "options": [
      "3.14",
      "3.1415",
      "3.1",
      "3.14159265"
    ],
    "correctAnswer": 0,
    "explanation": "`fixed` combined with `setprecision(2)` formats floating point output to exactly 2 digits after the decimal point (rounded to 3.14)."
  },
  {
    "id": "u1s3q9",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What is the difference between non-inline and inline member function definition syntax outside the class?",
    "code": "class Sample {\npublic:\n    void func1();\n    inline void func2();\n};\nvoid Sample::func1() {} // Non-inline\ninline void Sample::func2() {} // Inline outside class",
    "options": [
      "func2 requires the `inline` keyword before its definition outside class body",
      "func1 cannot be defined outside the class",
      "func2 becomes a static function",
      "There is no difference"
    ],
    "correctAnswer": 0,
    "explanation": "To define an inline member function outside the class definition, the keyword `inline` must explicitly precede the function header."
  },
  {
    "id": "u1s3q10",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What is the output of the following static count program?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    static int val;\n    void inc() { val++; }\n};\n\nint Base::val = 10;\n\nint main() {\n    Base b1, b2;\n    b1.inc();\n    b2.inc();\n    cout << Base::val;\n    return 0;\n}",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correctAnswer": 2,
    "explanation": "Base::val starts at 10. b1.inc() increments it to 11. b2.inc() increments the SAME shared variable to 12."
  },
  {
    "id": "u1s3q11",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "Which header file must be included to use parameterized stream manipulators like `setw()` and `setprecision()`?",
    "code": "#include <______>\nusing namespace std;",
    "options": [
      "<iostream>",
      "<iomanip>",
      "<stdlib.h>",
      "<sstream>"
    ],
    "correctAnswer": 1,
    "explanation": "<iomanip> defines stream manipulators that take arguments (e.g. setw, setprecision, setfill)."
  },
  {
    "id": "u1s3q12",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What is the output of hex and oct stream manipulators?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 16;\n    cout << hex << num << \" \" << oct << num;\n    return 0;\n}",
    "options": [
      "16 16",
      "10 20",
      "10 16",
      "a 20"
    ],
    "correctAnswer": 1,
    "explanation": "16 in hexadecimal (`hex`) is 10. 16 in octal (`oct`) is 20 (2*8^1 + 0*8^0 = 16). Output is \"10 20\"."
  },
  {
    "id": "u1s3q13",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "Where are static data members stored in memory?",
    "code": "// static int count;",
    "options": [
      "On the CPU registers",
      "On the function stack frame",
      "In the static / global data segment of memory",
      "On the dynamic heap memory"
    ],
    "correctAnswer": 2,
    "explanation": "Static variables exist for the entire lifetime of the program and are stored in the global/static memory region."
  },
  {
    "id": "u1s3q14",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "What is the output of the following inline expansion test code?",
    "code": "#include <iostream>\nusing namespace std;\n\ninline int maxVal(int a, int b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << maxVal(15, 25);\n    return 0;\n}",
    "options": [
      "15",
      "25",
      "0",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "maxVal(15, 25) evaluates (15 > 25) ? 15 : 25, returning 25."
  },
  {
    "id": "u1s3q15",
    "unitId": "unit1",
    "setId": "u1s3",
    "difficulty": "medium",
    "question": "Can static member functions be marked as `const` in C++?",
    "code": "class Test {\npublic:\n    static void display() const; // Is this valid?\n};",
    "options": [
      "Yes, it ensures static data cannot be modified",
      "No, because static member functions do not have a \"this\" pointer to qualify with const",
      "Yes, but only if the function returns void",
      "Yes, but only in C++20"
    ],
    "correctAnswer": 1,
    "explanation": "`const` member functions guarantee not to modify `*this`. Since static member functions lack a `this` pointer, declaring them `const` causes a compilation error."
  },
  {
    "id": "u1s4q1",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What is the fundamental difference between a `struct` and a `class` in C++?",
    "code": "struct A { int x; };\nclass B { int y; };",
    "options": [
      "Structs cannot contain member functions, whereas classes can",
      "Members of a struct are public by default; members of a class are private by default",
      "Structs are allocated on heap, while classes are allocated on stack",
      "Structs do not support constructors"
    ],
    "correctAnswer": 1,
    "explanation": "In C++, `struct` and `class` are almost identical, except struct members and default inheritance are `public` by default, whereas class members and default inheritance are `private`."
  },
  {
    "id": "u1s4q2",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What will be the size of the following C++ `union` on a 64-bit architecture?",
    "code": "#include <iostream>\nusing namespace std;\n\nunion Data {\n    int i;       // 4 bytes\n    char c;      // 1 byte\n    double d;    // 8 bytes\n};\n\nint main() {\n    cout << sizeof(union Data);\n    return 0;\n}",
    "options": [
      "13 bytes (4+1+8)",
      "8 bytes",
      "4 bytes",
      "1 byte"
    ],
    "correctAnswer": 1,
    "explanation": "Unions share memory among all member elements. The size of a union is equal to the size of its largest member element (`double d`, 8 bytes)."
  },
  {
    "id": "u1s4q3",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What will be the output of accessing the global variable using the scope resolution operator `::`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint val = 100; // Global\n\nint main() {\n    int val = 50; // Local\n    cout << val << \" \" << ::val;\n    return 0;\n}",
    "options": [
      "50 50",
      "100 100",
      "50 100",
      "100 50"
    ],
    "correctAnswer": 2,
    "explanation": "`val` resolves to local variable 50. `::val` uses global scope resolution operator to access global variable 100, outputting \"50 100\"."
  },
  {
    "id": "u1s4q4",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What is the output of the following enumeration code snippet?",
    "code": "#include <iostream>\nusing namespace std;\n\nenum Color { RED = 5, GREEN, BLUE = 10, YELLOW };\n\nint main() {\n    cout << GREEN << \" \" << YELLOW;\n    return 0;\n}",
    "options": [
      "6 11",
      "1 3",
      "5 10",
      "6 10"
    ],
    "correctAnswer": 0,
    "explanation": "RED is assigned 5, so GREEN automatically becomes 6. BLUE is assigned 10, so YELLOW automatically becomes 11. Output is \"6 11\"."
  },
  {
    "id": "u1s4q5",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What happens when writing to one member of a union and then immediately reading another member?",
    "code": "#include <iostream>\nusing namespace std;\n\nunion Store {\n    int a;\n    float b;\n};\n\nint main() {\n    Store s;\n    s.a = 65;\n    cout << s.a;\n    return 0;\n}",
    "options": [
      "Output is 65",
      "Compilation Error",
      "Always causes a memory access violation crash",
      "The values of a and b are added automatically"
    ],
    "correctAnswer": 0,
    "explanation": "s.a was written last, so reading s.a yields 65. If s.b were read, it would interpret the memory bytes of integer 65 as a float."
  },
  {
    "id": "u1s4q6",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What will be the output of the struct initialization code below?",
    "code": "#include <iostream>\nusing namespace std;\n\nstruct Student {\n    int id;\n    string name;\n    Student(int i, string n) : id(i), name(n) {}\n};\n\nint main() {\n    Student s1(101, \"Alice\");\n    cout << s1.name << \"-\" << s1.id;\n    return 0;\n}",
    "options": [
      "Alice-101",
      "101-Alice",
      "Alice",
      "Compilation Error: struct cannot have constructors"
    ],
    "correctAnswer": 0,
    "explanation": "In C++, structs can have constructors, member functions, access specifiers, and inheritance. `s1` is initialized with id 101 and name \"Alice\", outputting \"Alice-101\"."
  },
  {
    "id": "u1s4q7",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What is the output of enum class (scoped enum) usage in C++11?",
    "code": "#include <iostream>\nusing namespace std;\n\nenum class Status { SUCCESS = 1, FAILURE = 0 };\n\nint main() {\n    Status s = Status::SUCCESS;\n    if (s == Status::SUCCESS) {\n        cout << \"OK\";\n    }\n    return 0;\n}",
    "options": [
      "OK",
      "1",
      "SUCCESS",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`enum class` creates strongly-typed scoped enums. Checking `s == Status::SUCCESS` evaluates to true, outputting \"OK\"."
  },
  {
    "id": "u1s4q8",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What is the result of attempting to implicitly convert an `enum class` value to an integer?",
    "code": "enum class Direction { NORTH, SOUTH };\nint val = Direction::NORTH; // What happens here?",
    "options": [
      "val becomes 0 silently",
      "Compilation Error: enum class prevents implicit conversion to int",
      "val becomes 1",
      "Runtime exception"
    ],
    "correctAnswer": 1,
    "explanation": "Unlike traditional C-style enums, `enum class` does NOT implicitly convert to int. Explicit casting (`static_cast<int>(Direction::NORTH)`) is required."
  },
  {
    "id": "u1s4q9",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What is the scope of a local variable declared inside an if-statement block?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    if (true) {\n        int temp = 99;\n    }\n    // cout << temp; // Is temp accessible here?\n    return 0;\n}",
    "options": [
      "Function scope (accessible anywhere in main)",
      "Block scope (accessible only inside the if-statement block)",
      "Global scope",
      "File scope"
    ],
    "correctAnswer": 1,
    "explanation": "Variables declared inside `{}` braces have block scope and cease to exist outside that enclosing block."
  },
  {
    "id": "u1s4q10",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What will be the output of nested scope resolution?",
    "code": "#include <iostream>\nusing namespace std;\n\nint x = 10;\n\nint main() {\n    int x = 20;\n    {\n        int x = 30;\n        cout << x << \" \";\n    }\n    cout << x;\n    return 0;\n}",
    "options": [
      "30 20",
      "30 10",
      "20 20",
      "10 10"
    ],
    "correctAnswer": 0,
    "explanation": "The inner block shadows outer variables, printing 30. Once the inner block exits, outer local x (20) is printed, resulting in \"30 20\"."
  },
  {
    "id": "u1s4q11",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "Which operator is used to define member functions outside the class scope?",
    "code": "class Box {\npublic:\n    void show();\n};\nvoid Box::show() {} // Which operator is ::?",
    "options": [
      "Scope Resolution Operator (::)",
      "Ternary Operator (?:)",
      "Member Selector (.)",
      "Pointer to Member (.*)"
    ],
    "correctAnswer": 0,
    "explanation": "The double colon `::` is the scope resolution operator used to specify class ownership for out-of-line function definitions."
  },
  {
    "id": "u1s4q12",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What is the output of the following C-style enum default indexing?",
    "code": "#include <iostream>\nusing namespace std;\n\nenum Days { SUN, MON, TUE, WED };\n\nint main() {\n    Days today = TUE;\n    cout << today;\n    return 0;\n}",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "By default, uninitialized C-style enums start at 0 (SUN=0, MON=1, TUE=2, WED=3). TUE prints 2."
  },
  {
    "id": "u1s4q13",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What happens when inheritance is specified for a struct without access specifier?",
    "code": "struct Base { int x; };\nstruct Derived : Base { int y; }; // What is inheritance type?",
    "options": [
      "Public inheritance by default",
      "Private inheritance by default",
      "Protected inheritance by default",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "For structs, default inheritance is `public`. For classes, default inheritance is `private`."
  },
  {
    "id": "u1s4q14",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "What is the output of modifying union fields sequentially?",
    "code": "#include <iostream>\nusing namespace std;\n\nunion TestUnion {\n    int x;\n    int y;\n};\n\nint main() {\n    TestUnion u;\n    u.x = 10;\n    u.y = 25;\n    cout << u.x;\n    return 0;\n}",
    "options": [
      "10",
      "25",
      "35",
      "Garbage value"
    ],
    "correctAnswer": 1,
    "explanation": "Since x and y share the exact same memory location in union TestUnion, setting `u.y = 25` overwrites that location, so `u.x` reads 25."
  },
  {
    "id": "u1s4q15",
    "unitId": "unit1",
    "setId": "u1s4",
    "difficulty": "medium",
    "question": "Can a class contain a member of its own class type directly as a value field?",
    "code": "class Node {\n    Node next; // Is this allowed?\n};",
    "options": [
      "Yes, it creates a infinite recursive array",
      "No, because the size of Node is incomplete; it must use a pointer Node* next",
      "Yes, but only if Node is public",
      "Yes, in C++17 onwards"
    ],
    "correctAnswer": 1,
    "explanation": "A class cannot contain an instance of itself as a direct value field because its size would be undefined (incomplete type). It must store a pointer (`Node *next`) or reference."
  },
  {
    "id": "u1s5q1",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What is the output of the following friend function accessing private members?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Secret {\n    int code = 707;\n    friend void reveal(Secret s);\n};\n\nvoid reveal(Secret s) {\n    cout << s.code;\n}\n\nint main() {\n    Secret sec;\n    reveal(sec);\n    return 0;\n}",
    "options": [
      "707",
      "0",
      "Compilation Error: code is private",
      "Runtime Error"
    ],
    "correctAnswer": 0,
    "explanation": "A function declared as `friend` inside a class gains permission to access private and protected members of that class."
  },
  {
    "id": "u1s5q2",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "Is friendship mutual and transitive between classes in C++?",
    "code": "// Class A is friend of B. Is B automatically friend of A?",
    "options": [
      "Yes, friendship is automatically mutual and transitive",
      "No, friendship is neither mutual nor transitive unless explicitly specified",
      "Friendship is mutual, but not transitive",
      "Friendship is transitive, but not mutual"
    ],
    "correctAnswer": 1,
    "explanation": "Friendship is granted, not taken. If Class A declares Class B as friend, B can access A's private members, but A CANNOT access B's private members unless B explicitly declares A as friend."
  },
  {
    "id": "u1s5q3",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What will be the output of function overloading based on parameter types?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid show(int a) { cout << \"INT \"; }\nvoid show(double a) { cout << \"DOUBLE \"; }\n\nint main() {\n    show(5);\n    show(5.5);\n    return 0;\n}",
    "options": [
      "INT DOUBLE ",
      "DOUBLE INT ",
      "INT INT ",
      "Compilation Error: ambiguous call"
    ],
    "correctAnswer": 0,
    "explanation": "Integer literal 5 matches `show(int)`, and float/double literal 5.5 matches `show(double)`. Output is \"INT DOUBLE \"."
  },
  {
    "id": "u1s5q4",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What happens when overloading functions differing ONLY by return type?",
    "code": "#include <iostream>\nusing namespace std;\n\nint calc(int x) { return x; }\ndouble calc(int x) { return x * 1.0; } // Differing only by return type\n\nint main() {\n    calc(10);\n    return 0;\n}",
    "options": [
      "Compiles fine and calls int version",
      "Compiles fine and calls double version",
      "Compilation Error: functions cannot be overloaded by return type alone",
      "Runtime exception"
    ],
    "correctAnswer": 2,
    "explanation": "In C++, function overloading relies on parameter list signature (number, order, or types of parameters). Differing ONLY by return type causes a compilation error."
  },
  {
    "id": "u1s5q5",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What is the output of the recursive member function calculating factorial?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Math {\npublic:\n    int fact(int n) {\n        if (n <= 1) return 1;\n        return n * fact(n - 1);\n    }\n};\n\nint main() {\n    Math m;\n    cout << m.fact(4);\n    return 0;\n}",
    "options": [
      "24",
      "12",
      "4",
      "Infinite Recursion Stack Overflow"
    ],
    "correctAnswer": 0,
    "explanation": "fact(4) evaluates 4 * fact(3) = 4 * 3 * fact(2) = 4 * 3 * 2 * 1 = 24."
  },
  {
    "id": "u1s5q6",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What issue arises from function overloading combined with default parameters?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid printVal(int a, int b = 10) {}\nvoid printVal(int a) {}\n\nint main() {\n    // printVal(5); // What happens here?\n    return 0;\n}",
    "options": [
      "Calls printVal(int a)",
      "Calls printVal(int a, int b = 10)",
      "Compilation Error: ambiguous call to overloaded function",
      "Executes both functions sequentially"
    ],
    "correctAnswer": 2,
    "explanation": "Calling `printVal(5)` matches both `printVal(int)` and `printVal(int, int=10)` because the second argument has a default value, producing a compilation error due to ambiguity."
  },
  {
    "id": "u1s5q7",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What is the output of the following friend class example?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Alpha {\nprivate:\n    int data = 88;\n    friend class Beta;\n};\n\nclass Beta {\npublic:\n    void printAlpha(Alpha a) {\n        cout << a.data;\n    }\n};\n\nint main() {\n    Alpha a;\n    Beta b;\n    b.printAlpha(a);\n    return 0;\n}",
    "options": [
      "88",
      "0",
      "Compilation Error: Beta cannot access private member of Alpha",
      "Runtime Error"
    ],
    "correctAnswer": 0,
    "explanation": "Alpha explicitly declares `friend class Beta;`. Therefore, all member functions of Beta have access to Alpha's private data member `data`, printing 88."
  },
  {
    "id": "u1s5q8",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What will be the output of recursive count down function?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid countdown(int n) {\n    if (n == 0) return;\n    cout << n << \" \";\n    countdown(n - 1);\n}\n\nint main() {\n    countdown(3);\n    return 0;\n}",
    "options": [
      "3 2 1 ",
      "1 2 3 ",
      "3 2 1 0 ",
      "0 1 2 3 "
    ],
    "correctAnswer": 0,
    "explanation": "countdown(3) prints 3, calls countdown(2) which prints 2, calls countdown(1) which prints 1, calls countdown(0) which hits base condition returning, outputting \"3 2 1 \"."
  },
  {
    "id": "u1s5q9",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "Where must default parameter values be declared in function signatures?",
    "code": "// Which signature is valid?",
    "options": [
      "void compute(int a = 5, int b); // Default first",
      "void compute(int a, int b = 5); // Default trailing",
      "void compute(int a = 1, int b, int c = 3); // Default middle",
      "Default arguments can be placed anywhere"
    ],
    "correctAnswer": 1,
    "explanation": "In C++, default arguments must be specified from right to left (trailing parameters). A parameter without a default cannot follow parameters with default values."
  },
  {
    "id": "u1s5q10",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What is the output of the following function call sequence with reference vs default arguments?",
    "code": "#include <iostream>\nusing namespace std;\n\nint mult(int x, int y = 2, int z = 3) {\n    return x * y * z;\n}\n\nint main() {\n    cout << mult(4) << \" \" << mult(4, 5);\n    return 0;\n}",
    "options": [
      "24 60",
      "8 20",
      "24 20",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "mult(4) uses default y=2, z=3 -> 4 * 2 * 3 = 24. mult(4, 5) overrides y with 5, using default z=3 -> 4 * 5 * 3 = 60. Output is \"24 60\"."
  },
  {
    "id": "u1s5q11",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What happens if a recursive function lacks a base termination condition?",
    "code": "void infiniteRec(int n) {\n    infiniteRec(n + 1);\n}",
    "options": [
      "Returns 0 automatically",
      "Executes indefinitely until Stack Overflow (Segmentation Fault)",
      "Compilation Error",
      "Terminates gracefully after 1000 calls"
    ],
    "correctAnswer": 1,
    "explanation": "Without a base condition, the function calls itself indefinitely, consuming stack frames until call stack memory is exhausted (Stack Overflow runtime crash)."
  },
  {
    "id": "u1s5q12",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "Can a non-member global function be declared as a friend of a class?",
    "code": "class Box {\n    int width = 10;\n    friend void printWidth(Box b);\n};",
    "options": [
      "Yes, non-member functions can be friend functions",
      "No, only member functions of other classes can be friend functions",
      "Yes, but only if the function is inline",
      "No, friend keyword is restricted to classes only"
    ],
    "correctAnswer": 0,
    "explanation": "A friend function can be either a global non-member function or a member function of another class."
  },
  {
    "id": "u1s5q13",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What is the output of the recursive post-processing print order?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid printRev(int n) {\n    if (n == 0) return;\n    printRev(n - 1);\n    cout << n << \" \";\n}\n\nint main() {\n    printRev(3);\n    return 0;\n}",
    "options": [
      "3 2 1 ",
      "1 2 3 ",
      "3 2 1 0 ",
      "0 1 2 3 "
    ],
    "correctAnswer": 1,
    "explanation": "Because cout << n occurs AFTER the recursive call `printRev(n - 1)`, unwinding the call stack prints numbers in ascending order: \"1 2 3 \"."
  },
  {
    "id": "u1s5q14",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "What is the output of overloading `+` operator using friend function concept?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Complex {\n    int real;\npublic:\n    Complex(int r) : real(r) {}\n    friend int operator+(Complex c1, Complex c2) {\n        return c1.real + c2.real;\n    }\n};\n\nint main() {\n    Complex num1(15), num2(25);\n    cout << (num1 + num2);\n    return 0;\n}",
    "options": [
      "40",
      "1525",
      "Compilation Error",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "Friend function `operator+` takes two Complex objects and returns the sum of their `real` members: 15 + 25 = 40."
  },
  {
    "id": "u1s5q15",
    "unitId": "unit1",
    "setId": "u1s5",
    "difficulty": "medium",
    "question": "Which rule applies when default parameters are declared in both function declaration and definition?",
    "code": "void test(int x = 10); // Declaration\nvoid test(int x = 10) {} // Definition - Is this allowed?",
    "options": [
      "Default parameter must be specified in BOTH declaration and definition",
      "Default parameter should be specified in the declaration OR definition, but NOT BOTH",
      "Default parameter must be in definition only",
      "Causes a linker error"
    ],
    "correctAnswer": 1,
    "explanation": "In C++, default arguments cannot be repeated in both the function declaration and definition. Typically, they are placed in the header/declaration only."
  },
  {
    "id": "u2s1q1",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What will be the output of the following pointer dereferencing code?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 25;\n    int *ptr = &val;\n    cout << *ptr;\n    return 0;\n}",
    "options": [
      "25",
      "Address of val",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`ptr` stores memory address of `val`. Dereferencing `*ptr` yields the value stored at that address, which is 25."
  },
  {
    "id": "u2s1q2",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What operator is used to obtain the memory address of a variable in C++?",
    "code": "int number = 100;\n// Which operator gives the address of number?",
    "options": [
      "* (Dereference operator)",
      "& (Address-of operator)",
      "-> (Arrow operator)",
      ":: (Scope operator)"
    ],
    "correctAnswer": 1,
    "explanation": "The `&` (address-of) operator retrieves the memory address where a variable is stored."
  },
  {
    "id": "u2s1q3",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What is a Void Pointer (`void*`) in C++?",
    "code": "int num = 50;\nvoid *ptr = &num;",
    "options": [
      "A pointer that points to nothing and cannot store any address",
      "A generic pointer that can point to objects of any data type",
      "A pointer that automatically deallocates memory when out of scope",
      "A pointer restricted to void function return types"
    ],
    "correctAnswer": 1,
    "explanation": "A void pointer (`void*`) is a generic pointer capable of pointing to any data type without type binding."
  },
  {
    "id": "u2s1q4",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What is required before dereferencing a `void*` pointer in C++?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 42;\n    void *vptr = &num;\n    // cout << *vptr; // Can we do this directly?\n    cout << *(static_cast<int*>(vptr));\n    return 0;\n}",
    "options": [
      "Direct dereferencing *vptr works fine without casting",
      "Explicit type casting to a specific data pointer type (e.g., int*) before dereferencing",
      "Void pointers cannot be dereferenced under any circumstances",
      "Automatic implicitly cast by cout stream"
    ],
    "correctAnswer": 1,
    "explanation": "Because a `void*` lacks data type size information, it cannot be dereferenced directly without explicit type casting (e.g. `*(int*)vptr`)."
  },
  {
    "id": "u2s1q5",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What will be the output of updating a variable through its pointer?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 5;\n    int *p = &count;\n    *p = 15;\n    cout << count;\n    return 0;\n}",
    "options": [
      "5",
      "15",
      "Address of count",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "`*p = 15` modifies the value at the address stored in `p` (which is `count`), changing `count` to 15."
  },
  {
    "id": "u2s1q6",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What is the output of the array pointer indexing code below?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30};\n    int *p = arr;\n    cout << *p << \" \" << *(p + 1);\n    return 0;\n}",
    "options": [
      "10 20",
      "10 30",
      "20 30",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "The array name `arr` decays to pointer to first element (10). `*p` is 10, and `*(p + 1)` points to second element 20, outputting \"10 20\"."
  },
  {
    "id": "u2s1q7",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What is the size of a pointer variable on a 64-bit system regardless of the data type it points to?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char *cp;\n    int *ip;\n    double *dp;\n    // On 64-bit OS\n}",
    "options": [
      "char* is 1 byte, int* is 4 bytes, double* is 8 bytes",
      "All pointer types have the same size (8 bytes on 64-bit systems)",
      "All pointer types are 2 bytes",
      "Pointers do not occupy any memory space"
    ],
    "correctAnswer": 1,
    "explanation": "Pointers store memory addresses. On a 64-bit architecture, memory addresses are 64 bits (8 bytes) long for ALL data types."
  },
  {
    "id": "u2s1q8",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What will be the output of the code snippet assigning pointer to pointer?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 7;\n    int *p1 = &a;\n    int *p2 = p1;\n    *p2 = 14;\n    cout << a;\n    return 0;\n}",
    "options": [
      "7",
      "14",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "p2 gets a copy of address stored in p1 (address of a). Modifying `*p2 = 14` alters `a` to 14."
  },
  {
    "id": "u2s1q9",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "Which keyword in C++11 represents a type-safe null pointer?",
    "code": "int *ptr = ______; // Modern C++ null pointer",
    "options": [
      "NULL",
      "0",
      "nullptr",
      "NIL"
    ],
    "correctAnswer": 2,
    "explanation": "`nullptr` was introduced in C++11 as a literal type-safe null pointer of type `std::nullptr_t`."
  },
  {
    "id": "u2s1q10",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What is the output of the character pointer code below?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char str[] = \"C++\";\n    char *ptr = str;\n    cout << ptr;\n    return 0;\n}",
    "options": [
      "C++",
      "Address of str",
      "C",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`cout` overloads `operator<<` for `char*` to print the null-terminated C-string content (\"C++\") rather than its address."
  },
  {
    "id": "u2s1q11",
    "unitId": "unit1",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What will happen when trying to perform arithmetic directly on a `void*` pointer in standard C++?",
    "code": "void *vptr = &someVar;\nvptr++; // Is void pointer arithmetic allowed in ISO C++?",
    "options": [
      "Increments by 1 byte",
      "ISO C++ standard forbids pointer arithmetic on void* because sizeof(void) is incomplete",
      "Increments by 4 bytes automatically",
      "Compiles and doubles the memory address"
    ],
    "correctAnswer": 1,
    "explanation": "In standard ISO C++, arithmetic on `void*` is illegal because `void` has no type size (`sizeof(void)` is incomplete)."
  },
  {
    "id": "u2s1q12",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What will be printed by the following pointer code?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[3] = {5, 15, 25};\n    cout << *(arr + 2);\n    return 0;\n}",
    "options": [
      "5",
      "15",
      "25",
      "Address of arr[2]"
    ],
    "correctAnswer": 2,
    "explanation": "`*(arr + 2)` is equivalent to `arr[2]`, which accesses the third element 25."
  },
  {
    "id": "u2s1q13",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "Which syntax correctly declares a pointer `ptr` to a `double` variable?",
    "code": "double temp = 98.6;",
    "options": [
      "double *ptr = &temp;",
      "double ptr = *temp;",
      "double &ptr = temp;",
      "pointer<double> ptr = &temp;"
    ],
    "correctAnswer": 0,
    "explanation": "`double *ptr = &temp;` declares a pointer `ptr` to a `double` and assigns it the address of `temp`."
  },
  {
    "id": "u2s1q14",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What will be the value of `x` after the following operations?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int *p = &x;\n    *p += 5;\n    cout << x;\n    return 0;\n}",
    "options": [
      "10",
      "15",
      "5",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "`*p += 5` adds 5 to the variable pointed to by `p` (`x`), resulting in 15."
  },
  {
    "id": "u2s1q15",
    "unitId": "unit2",
    "setId": "u2s1",
    "difficulty": "easy",
    "question": "What does an uninitialized pointer point to by default inside a local function scope?",
    "code": "void test() {\n    int *ptr; // Uninitialized local pointer\n}",
    "options": [
      "Points to NULL / nullptr automatically",
      "Contains a random garbage memory address (Wild Pointer)",
      "Points to address 0x000000",
      "Causes immediate compilation error"
    ],
    "correctAnswer": 1,
    "explanation": "An uninitialized local pointer contains arbitrary garbage memory address, creating a dangerous Wild Pointer."
  },
  {
    "id": "u2s2q1",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "Given an integer pointer `ptr` at memory address `1000` (assuming 4-byte integers), what will be `ptr + 1`?",
    "code": "int *ptr = (int*)1000;\nptr = ptr + 1; // What address does ptr store now?",
    "options": [
      "1001",
      "1002",
      "1004",
      "1008"
    ],
    "correctAnswer": 2,
    "explanation": "Pointer arithmetic scales by `sizeof(type)`. For a 4-byte `int`, adding 1 advances the pointer by 4 bytes: 1000 + (1 * 4) = 1004."
  },
  {
    "id": "u2s2q2",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What will be the output of the post-increment pointer dereference `*p++`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nums[] = {10, 20, 30};\n    int *p = nums;\n    cout << *p++ << \" \" << *p;\n    return 0;\n}",
    "options": [
      "10 20",
      "20 20",
      "10 10",
      "20 30"
    ],
    "correctAnswer": 0,
    "explanation": "`*p++` evaluates `*p` first (10) and then increments pointer `p` to point to 20. The subsequent `*p` prints 20, yielding \"10 20\"."
  },
  {
    "id": "u2s2q3",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What will be the output of `std::string::length()` and `size()` for the string object below?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = \"Hello C++\";\n    cout << str.length() << \" \" << str.size();\n    return 0;\n}",
    "options": [
      "9 9",
      "10 10",
      "9 10",
      "8 8"
    ],
    "correctAnswer": 0,
    "explanation": "\"Hello C++\" contains 9 characters (5 letters + 1 space + 3 chars). Both `length()` and `size()` return 9."
  },
  {
    "id": "u2s2q4",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the output of string concatenation using operator `+`?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s1 = \"Data\";\n    string s2 = \"Structures\";\n    string s3 = s1 + \" \" + s2;\n    cout << s3;\n    return 0;\n}",
    "options": [
      "DataStructures",
      "Data Structures",
      "Data+Structures",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "The `+` operator concatenates C++ string objects, resulting in \"Data Structures\"."
  },
  {
    "id": "u2s2q5",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the result of subtracting two pointers pointing to elements in the same array?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    int *p1 = &arr[1];\n    int *p2 = &arr[4];\n    cout << p2 - p1;\n    return 0;\n}",
    "options": [
      "3",
      "12",
      "4",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "Subtracting two pointers to the same array yields the number of elements between them (index 4 - index 1 = 3 elements)."
  },
  {
    "id": "u2s2q6",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the output of `std::string::append()` function?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string greeting = \"Good\";\n    greeting.append(\" Morning\");\n    cout << greeting;\n    return 0;\n}",
    "options": [
      "Good Morning",
      "Good",
      "Morning",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`append()` modifies the string object by attaching \" Morning\" to the end of \"Good\", yielding \"Good Morning\"."
  },
  {
    "id": "u2s2q7",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the output of `(*p)++` vs `*p++`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 5;\n    int *p = &val;\n    (*p)++;\n    cout << val;\n    return 0;\n}",
    "options": [
      "5",
      "6",
      "Address of val",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "Parentheses `(*p)++` prioritize dereferencing `p` (which is `val`) and then incrementing the integer value from 5 to 6."
  },
  {
    "id": "u2s2q8",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "Which method converts a C++ `std::string` object into a null-terminated C-style character array `const char*`?",
    "code": "string str = \"CPP\";\n// Which method returns const char*?",
    "options": [
      "str.c_str()",
      "str.toChar()",
      "str.cstr()",
      "str.getArray()"
    ],
    "correctAnswer": 0,
    "explanation": "`str.c_str()` returns a pointer to a null-terminated array of characters representing the current string content."
  },
  {
    "id": "u2s2q9",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the output of string element access using bracket operator `[]` vs `at()` method?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string word = \"CODE\";\n    cout << word[1] << \" \" << word.at(3);\n    return 0;\n}",
    "options": [
      "O E",
      "C D",
      "O D",
      "C E"
    ],
    "correctAnswer": 0,
    "explanation": "word[1] accesses character at index 1 ('O'). word.at(3) accesses character at index 3 ('E'). Output is \"O E\"."
  },
  {
    "id": "u2s2q10",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What happens if pointer comparison operators (`<`, `>`, `==`) are used between two pointers?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3};\n    int *p1 = &arr[0];\n    int *p2 = &arr[2];\n    if (p1 < p2) cout << \"p1 is lower address\";\n    return 0;\n}",
    "options": [
      "Prints \"p1 is lower address\"",
      "Compares the values stored at the pointers (1 < 3)",
      "Compilation Error",
      "Runtime Crash"
    ],
    "correctAnswer": 0,
    "explanation": "Comparing pointers compares their underlying memory addresses. Since &arr[0] precedes &arr[2] in contiguous memory, p1 < p2 is true."
  },
  {
    "id": "u2s2q11",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the output of the string `substr()` member function?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = \"Programming\";\n    cout << str.substr(3, 4);\n    return 0;\n}",
    "options": [
      "gram",
      "prog",
      "ming",
      "ramm"
    ],
    "correctAnswer": 0,
    "explanation": "`str.substr(pos, len)` extracts `len` characters starting at index `pos`. Starting at index 3 ('g') for 4 chars yields \"gram\"."
  },
  {
    "id": "u2s2q12",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "Which of the following is NOT a valid pointer arithmetic operation in C++?",
    "code": "int *p1, *p2;",
    "options": [
      "Adding an integer to a pointer (p1 + 2)",
      "Subtracting an integer from a pointer (p1 - 3)",
      "Adding two pointers together (p1 + p2)",
      "Subtracting one pointer from another (p2 - p1)"
    ],
    "correctAnswer": 2,
    "explanation": "Adding two memory addresses together (`p1 + p2`) is meaningless in memory management and illegal in C++."
  },
  {
    "id": "u2s2q13",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the output of clearing a string object with `clear()`?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = \"Active\";\n    text.clear();\n    cout << text.empty() << \" \" << text.length();\n    return 0;\n}",
    "options": [
      "1 0",
      "0 6",
      "0 0",
      "1 6"
    ],
    "correctAnswer": 0,
    "explanation": "`clear()` removes all characters from the string. `empty()` returns true (1) and `length()` returns 0."
  },
  {
    "id": "u2s2q14",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the output of prefix decrement on pointer dereferencing `*--ptr`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {100, 200, 300};\n    int *ptr = &arr[2];\n    cout << *--ptr;\n    return 0;\n}",
    "options": [
      "200",
      "300",
      "100",
      "299"
    ],
    "correctAnswer": 0,
    "explanation": "`--ptr` first decrements pointer `ptr` from pointing to arr[2] (300) to arr[1] (200), and then dereferences it, outputting 200."
  },
  {
    "id": "u2s2q15",
    "unitId": "unit2",
    "setId": "u2s2",
    "difficulty": "easy",
    "question": "What is the primary difference between a reference variable and a pointer variable in C++?",
    "code": "int x = 10;\nint *p = &x; // Pointer\nint &r = x;  // Reference",
    "options": [
      "Pointers can be NULL and can be reassigned; References cannot be NULL and cannot be reassigned once bound",
      "References consume 8 bytes of extra memory on stack",
      "Pointers do not support arithmetic",
      "References require explicit dereference operators (*r)"
    ],
    "correctAnswer": 0,
    "explanation": "Pointers can store nullptr and be reassigned to point elsewhere. References must be bound upon creation, cannot be NULL, and cannot be re-bound."
  },
  {
    "id": "u2s3q1",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What will be the output of the following pointer to pointer (`**`) dereferencing code?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 500;\n    int *p1 = &n;\n    int **p2 = &p1;\n    cout << **p2;\n    return 0;\n}",
    "options": [
      "500",
      "Address of n",
      "Address of p1",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`p2` points to `p1`, which points to `n`. Dereferencing twice `**p2` fetches the value of `n` (500)."
  },
  {
    "id": "u2s3q2",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What is a Dangling Pointer in C++?",
    "code": "int* getPtr() {\n    int x = 10;\n    return &x; // Returning address of local stack variable\n}",
    "options": [
      "A pointer that points to a memory location that has been deallocated or freed",
      "A pointer that has never been initialized to any memory address",
      "A pointer pointing to a const variable",
      "A pointer assigned to nullptr"
    ],
    "correctAnswer": 0,
    "explanation": "A dangling pointer references memory that has been deleted or went out of scope (like local variable `x` after `getPtr()` returns)."
  },
  {
    "id": "u2s3q3",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What will happen when executing the following code accessing a Dangling Pointer?",
    "code": "#include <iostream>\nusing namespace std;\n\nint* createInt() {\n    int val = 99;\n    return &val;\n}\n\nint main() {\n    int *ptr = createInt();\n    // cout << *ptr; // Undefined Behavior!\n    return 0;\n}",
    "options": [
      "Always prints 99 reliably",
      "Undefined Behavior (Accessing out-of-scope stack memory)",
      "Compilation error",
      "Automatically extends the lifetime of val"
    ],
    "correctAnswer": 1,
    "explanation": "`val` is destroyed when `createInt()` returns. Dereferencing `ptr` accesses invalid stack memory, causing Undefined Behavior."
  },
  {
    "id": "u2s3q4",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What is a Wild Pointer in C++?",
    "code": "int main() {\n    int *ptr; // Wild pointer!\n    *ptr = 100; // Dangerous!\n}",
    "options": [
      "An uninitialized pointer that contains a random garbage memory address",
      "A pointer pointing to dynamically allocated heap memory",
      "A void pointer",
      "A pointer to a function"
    ],
    "correctAnswer": 0,
    "explanation": "A Wild Pointer is an uninitialized pointer that points to an arbitrary, unknown memory location."
  },
  {
    "id": "u2s3q5",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What happens when dereferencing and assigning to a NULL pointer (Null Pointer Assignment)?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int *p = NULL;\n    *p = 50; // Dereferencing NULL!\n    return 0;\n}",
    "options": [
      "Allocates memory automatically",
      "Runtime Segmentation Fault / Access Violation Crash",
      "Prints 0",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "Dereferencing a NULL / nullptr attempts to read/write memory address 0x0, triggering an immediate OS Segmentation Fault / Crash."
  },
  {
    "id": "u2s3q6",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What will be the output of modifying value via double pointer `**p2`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 10;\n    int *p1 = &num;\n    int **p2 = &p1;\n    **p2 = 80;\n    cout << num;\n    return 0;\n}",
    "options": [
      "10",
      "80",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "`**p2 = 80` dereferences `p2` to get `p1`, then dereferences `p1` to set `num` to 80."
  },
  {
    "id": "u2s3q7",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "How can a developer prevent a pointer from becoming a Dangling Pointer after deleting dynamic memory?",
    "code": "int *ptr = new int(42);\ndelete ptr;\nptr = ______; // Best practice safe line",
    "options": [
      "nullptr",
      "new int(0)",
      "&ptr",
      "delete ptr"
    ],
    "correctAnswer": 0,
    "explanation": "Setting `ptr = nullptr;` immediately after `delete ptr;` ensures the pointer no longer references freed memory, preventing dangling pointer defects."
  },
  {
    "id": "u2s3q8",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What is the output of pointer pointer manipulation code below?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 1, b = 2;\n    int *p = &a;\n    int **pp = &p;\n    *pp = &b;\n    **pp = 99;\n    cout << a << \" \" << b;\n    return 0;\n}",
    "options": [
      "1 99",
      "99 2",
      "99 99",
      "1 2"
    ],
    "correctAnswer": 0,
    "explanation": "`*pp = &b` changes `p` to point to `b`. Then `**pp = 99` updates `b` to 99. `a` remains untouched (1), printing \"1 99\"."
  },
  {
    "id": "u2s3q9",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "Which syntax correctly declares a pointer to a pointer to an integer?",
    "code": "// Pointer to pointer syntax",
    "options": [
      "int **ptr;",
      "int *&ptr;",
      "int ptr**;",
      "pointer<pointer<int>> ptr;"
    ],
    "correctAnswer": 0,
    "explanation": "`int **ptr;` declares a double pointer capable of storing the memory address of an `int*` pointer."
  },
  {
    "id": "u2s3q10",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What will be the output of the following triple pointer code?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 7;\n    int *p1 = &val;\n    int **p2 = &p1;\n    int ***p3 = &p2;\n    cout << ***p3;\n    return 0;\n}",
    "options": [
      "7",
      "Address of val",
      "Address of p2",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`***p3` dereferences three levels of indirection (p3 -> p2 -> p1 -> val), successfully outputting 7."
  },
  {
    "id": "u2s3q11",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What memory bug occurs when dynamic memory is allocated using `new` but never released with `delete`?",
    "code": "void leak() {\n    int *p = new int[1000];\n    // Forgot delete[] p;\n}",
    "options": [
      "Memory Leak",
      "Stack Overflow",
      "Segmentation Fault",
      "Buffer Overflow"
    ],
    "correctAnswer": 0,
    "explanation": "Allocating heap memory without freeing it causes a Memory Leak, continuously consuming system memory until exhaustion."
  },
  {
    "id": "u2s3q12",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What happens when calling `delete` on a `nullptr` in C++?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int *p = nullptr;\n    delete p; // Safe or Crash?\n    cout << \"Safe\";\n    return 0;\n}",
    "options": [
      "Prints \"Safe\" (Deleting nullptr is guaranteed to be a safe no-op)",
      "Segmentation Fault crash",
      "Compilation Error",
      "Undefined behavior"
    ],
    "correctAnswer": 0,
    "explanation": "The C++ standard explicitly guarantees that calling `delete` or `delete[]` on a `nullptr` is completely safe and performs no operation (no-op)."
  },
  {
    "id": "u2s3q13",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What is the output of pointer re-assignment across double pointer?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5, y = 10;\n    int *px = &x, *py = &y;\n    int **pp = &px;\n    *pp = py;\n    cout << **pp;\n    return 0;\n}",
    "options": [
      "5",
      "10",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "`*pp = py` re-assigns pointer `px` to store the address of `y`. Dereferencing `**pp` now accesses `y` (10)."
  },
  {
    "id": "u2s3q14",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What is the danger of performing `delete ptr;` TWICE on the same non-null pointer (Double Free)?",
    "code": "int *ptr = new int(10);\ndelete ptr;\ndelete ptr; // Double Free!",
    "options": [
      "Undefined Behavior / Heap Corruption crash",
      "Safely ignored by compiler",
      "Re-allocates memory",
      "Compilation error"
    ],
    "correctAnswer": 0,
    "explanation": "Double Free corrupts heap allocator metadata, leading to security vulnerabilities or immediate crash due to Undefined Behavior."
  },
  {
    "id": "u2s3q15",
    "unitId": "unit2",
    "setId": "u2s3",
    "difficulty": "medium",
    "question": "What will be the output of the code snippet below?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30};\n    int *ptr = arr;\n    int **pptr = &ptr;\n    cout << **pptr + 5;\n    return 0;\n}",
    "options": [
      "15",
      "25",
      "35",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`**pptr` evaluates `*ptr` which is `arr[0]` (10). Adding 5 yields 10 + 5 = 15."
  },
  {
    "id": "u2s4q1",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What is the implicit `this` pointer inside a C++ non-static member function?",
    "code": "class Sample {\n    int val;\npublic:\n    void setVal(int v) {\n        this->val = v; // What is \"this\"?\n    }\n};",
    "options": [
      "A pointer holding the address of the current object invoking the member function",
      "A reference to the base class",
      "A global static pointer shared across all objects",
      "A pointer pointing to main()"
    ],
    "correctAnswer": 0,
    "explanation": "`this` is a constant pointer passed implicitly to all non-static member functions, holding the memory address of the invoking object."
  },
  {
    "id": "u2s4q2",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What is the output of method chaining enabled by returning `*this` from member functions?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Calc {\n    int val = 0;\npublic:\n    Calc& add(int n) { val += n; return *this; }\n    Calc& mult(int n) { val *= n; return *this; }\n    void show() { cout << val; }\n};\n\nint main() {\n    Calc c;\n    c.add(5).mult(3).show();\n    return 0;\n}",
    "options": [
      "15",
      "5",
      "0",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`add(5)` updates val to 5 and returns reference to current object `*this`. Method chaining calls `mult(3)` which updates val to 15, printing 15."
  },
  {
    "id": "u2s4q3",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What will be the output of creating an Array of Objects in C++?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Item {\npublic:\n    int id;\n    Item() { id = 1; }\n};\n\nint main() {\n    Item items[3];\n    items[1].id = 99;\n    cout << items[0].id << \" \" << items[1].id << \" \" << items[2].id;\n    return 0;\n}",
    "options": [
      "1 99 1",
      "1 1 1",
      "99 99 99",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "Creating `Item items[3]` calls default constructor for all 3 elements (id=1). Updating items[1].id to 99 outputs \"1 99 1\"."
  },
  {
    "id": "u2s4q4",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What operator is used to access class members when using a pointer to an object (`Object* ptr`)?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Student {\npublic:\n    int age = 20;\n};\n\nint main() {\n    Student s;\n    Student *ptr = &s;\n    // How to access age using ptr?\n    cout << ptr____age;\n    return 0;\n}",
    "options": [
      "-> (Arrow operator)",
      ". (Dot operator)",
      ":: (Scope operator)",
      ".* (Pointer to member operator)"
    ],
    "correctAnswer": 0,
    "explanation": "The arrow operator `->` dereferences the object pointer and accesses its member variable or function (`ptr->age`)."
  },
  {
    "id": "u2s4q5",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What serious issue occurs in a class containing raw pointers when using default shallow copy constructor?",
    "code": "class Buffer {\n    int *data;\npublic:\n    Buffer(int size) { data = new int[size]; }\n    ~Buffer() { delete[] data; }\n};",
    "options": [
      "Both objects share the same heap memory, leading to Double Free crash upon destruction",
      "Deep copy is automatically performed by compiler",
      "Causes immediate compilation error",
      "The pointer is automatically converted to std::vector"
    ],
    "correctAnswer": 0,
    "explanation": "Default copy constructor performs shallow copy (bitwise copy of pointer address). When both objects go out of scope, their destructors run `delete[] data` on the same address, causing a Double Free crash."
  },
  {
    "id": "u2s4q6",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What is the output of resolving shadow member variable names using `this` pointer?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Point {\n    int x;\npublic:\n    Point(int x) {\n        this->x = x;\n    }\n    void print() { cout << x; }\n};\n\nint main() {\n    Point p(45);\n    p.print();\n    return 0;\n}",
    "options": [
      "45",
      "0",
      "Garbage value",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`this->x = x` distinguishes member variable `x` from parameter `x`, correctly assigning 45."
  },
  {
    "id": "u2s4q7",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What is the output of invoking member functions through dynamic object allocation with `new`?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int val;\n    Node(int v) : val(v) {}\n};\n\nint main() {\n    Node *n = new Node(77);\n    cout << n->val;\n    delete n;\n    return 0;\n}",
    "options": [
      "77",
      "0",
      "Address of n",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`new Node(77)` dynamically allocates Node on heap, returning `Node*`. Accessing `n->val` yields 77."
  },
  {
    "id": "u2s4q8",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What constructor must be explicitly implemented to avoid shallow copy bugs in classes containing pointers?",
    "code": "// Rule of Three in C++",
    "options": [
      "Deep Copy Constructor and Copy Assignment Operator",
      "Default Parameter Constructor",
      "Static Constructor",
      "Virtual Constructor"
    ],
    "correctAnswer": 0,
    "explanation": "Implementing a custom Deep Copy Constructor allocates separate memory for the copy, eliminating shared pointer bugs."
  },
  {
    "id": "u2s4q9",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What will be the output of iterating over an array of object pointers?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    int num;\n    Base(int n) : num(n) {}\n};\n\nint main() {\n    Base* arr[2] = { new Base(10), new Base(20) };\n    cout << arr[0]->num + arr[1]->num;\n    delete arr[0];\n    delete arr[1];\n    return 0;\n}",
    "options": [
      "30",
      "10",
      "20",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`arr[0]->num` is 10 and `arr[1]->num` is 20. Their sum is 30."
  },
  {
    "id": "u2s4q10",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What type is the `this` pointer inside a `const` member function of class `Sample`?",
    "code": "class Sample {\n    void display() const {\n        // What is the exact type of \"this\" here?\n    }\n};",
    "options": [
      "const Sample* const (pointer to constant object)",
      "Sample* const (constant pointer to non-const object)",
      "Sample*",
      "const Sample&"
    ],
    "correctAnswer": 0,
    "explanation": "Inside a `const` member function, `this` is of type `const Sample* const` (a constant pointer to a constant object), preventing modifications to member fields."
  },
  {
    "id": "u2s4q11",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What will be the output of the destructor call order on an array of objects allocated on stack?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Tracker {\n    int id;\npublic:\n    Tracker(int i) : id(i) {}\n    ~Tracker() { cout << id << \" \"; }\n};\n\nint main() {\n    Tracker t[2] = { Tracker(1), Tracker(2) };\n    return 0;\n}",
    "options": [
      "2 1 ",
      "1 2 ",
      "1 1 ",
      "2 2 "
    ],
    "correctAnswer": 0,
    "explanation": "Objects in stack arrays are constructed in forward order (1, 2) and destroyed in REVERSE order when going out of scope, outputting \"2 1 \"."
  },
  {
    "id": "u2s4q12",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "Can `this` pointer be modified inside a member function (e.g. `this = nullptr;`)?",
    "code": "void reset() {\n    // this = nullptr; // Is this valid?\n}",
    "options": [
      "No, \"this\" is an rvalue constant pointer and cannot be assigned to",
      "Yes, it deletes the object automatically",
      "Yes, but only in non-const functions",
      "Yes, in C++20"
    ],
    "correctAnswer": 0,
    "explanation": "`this` is an immutable non-lvalue pointer. Assigning to `this` causes a compilation error."
  },
  {
    "id": "u2s4q13",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What is the output of accessing static members through an object pointer (`ptr->staticMember`)?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Stat {\npublic:\n    static int code;\n};\nint Stat::code = 55;\n\nint main() {\n    Stat *ptr = nullptr;\n    cout << ptr->code;\n    return 0;\n}",
    "options": [
      "55 (Static members do not require dereferencing a valid instance address)",
      "Segmentation Fault crash",
      "Compilation error",
      "Garbage value"
    ],
    "correctAnswer": 0,
    "explanation": "Even though `ptr` is `nullptr`, accessing static members via `ptr->code` evaluates `Stat::code` (55) at compile time without dereferencing `ptr`."
  },
  {
    "id": "u2s4q14",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What will be the output of explicit placement `this` check?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Demo {\npublic:\n    bool isSame(Demo *other) {\n        return this == other;\n    }\n};\n\nint main() {\n    Demo d1, d2;\n    cout << d1.isSame(&d1) << \" \" << d1.isSame(&d2);\n    return 0;\n}",
    "options": [
      "1 0",
      "0 1",
      "1 1",
      "0 0"
    ],
    "correctAnswer": 0,
    "explanation": "`d1.isSame(&d1)` compares `this` (&d1) with &d1, returning true (1). `d1.isSame(&d2)` compares &d1 with &d2, returning false (0). Output is \"1 0\"."
  },
  {
    "id": "u2s4q15",
    "unitId": "unit2",
    "setId": "u2s4",
    "difficulty": "medium",
    "question": "What is the correct syntax for invoking a member function using an object pointer `p`?",
    "code": "Sample *p = new Sample();\n// Which call is valid?",
    "options": [
      "p->display();",
      "(*p).display();",
      "Both p->display() and (*p).display() are valid",
      "p.display();"
    ],
    "correctAnswer": 2,
    "explanation": "Both `p->display()` and dereferenced dot syntax `(*p).display()` are valid ways to invoke member functions through a pointer."
  },
  {
    "id": "u2s5q1",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What is the syntax to declare a Pointer to a Data Member `int val` of class `Test`?",
    "code": "class Test {\npublic:\n    int val;\n};\n// Syntax for pointer to data member:",
    "options": [
      "int Test::*ptr = &Test::val;",
      "int *Test::ptr = &Test::val;",
      "Test::int *ptr = &val;",
      "int *ptr = &Test::val;"
    ],
    "correctAnswer": 0,
    "explanation": "Pointer to a data member of class `Test` is declared as `int Test::*ptr = &Test::val;`."
  },
  {
    "id": "u2s5q2",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What operator is used to dereference a Pointer to Data Member using an object instance `obj`?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Sample {\npublic:\n    int data = 123;\n};\n\nint main() {\n    Sample obj;\n    int Sample::*p = &Sample::data;\n    // Access data using obj and p:\n    cout << obj.*p;\n    return 0;\n}",
    "options": [
      ".* operator",
      "->* operator",
      ":: operator",
      "-> operator"
    ],
    "correctAnswer": 0,
    "explanation": "The `.*` operator is the pointer-to-member selector used with an object instance (`obj.*p`)."
  },
  {
    "id": "u2s5q3",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What operator is used to dereference a Pointer to Data Member using an Object Pointer `objPtr`?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Sample {\npublic:\n    int data = 456;\n};\n\nint main() {\n    Sample *objPtr = new Sample();\n    int Sample::*p = &Sample::data;\n    cout << objPtr->*p;\n    delete objPtr;\n    return 0;\n}",
    "options": [
      "->* operator",
      ".* operator",
      "-> operator",
      ":: operator"
    ],
    "correctAnswer": 0,
    "explanation": "The `->*` operator is used to access a class data member through an object pointer (`objPtr->*p`)."
  },
  {
    "id": "u2s5q4",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What will be the output of processing a 2D multidimensional array inside a class?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Matrix {\npublic:\n    int mat[2][2] = {{1, 2}, {3, 4}};\n    int getSum() {\n        int sum = 0;\n        for(int i=0; i<2; i++)\n            for(int j=0; j<2; j++)\n                sum += mat[i][j];\n        return sum;\n    }\n};\n\nint main() {\n    Matrix m;\n    cout << m.getSum();\n    return 0;\n}",
    "options": [
      "10",
      "4",
      "6",
      "12"
    ],
    "correctAnswer": 0,
    "explanation": "The 2D matrix sum is 1 + 2 + 3 + 4 = 10."
  },
  {
    "id": "u2s5q5",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What is the output of `std::string::replace()` modifier function?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = \"I like Java programming\";\n    str.replace(7, 4, \"C++\");\n    cout << str;\n    return 0;\n}",
    "options": [
      "I like C++ programming",
      "I like Java C++",
      "C++ programming",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`str.replace(pos, len, newStr)` replaces 4 characters starting at index 7 (\"Java\") with \"C++\", resulting in \"I like C++ programming\"."
  },
  {
    "id": "u2s5q6",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What is the output of 2D array pointer offset calculation `*(*(arr + i) + j)`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[2][3] = {{10, 20, 30}, {40, 50, 60}};\n    cout << *(*(arr + 1) + 2);\n    return 0;\n}",
    "options": [
      "60",
      "50",
      "30",
      "40"
    ],
    "correctAnswer": 0,
    "explanation": "`*(*(arr + 1) + 2)` is equivalent to `arr[1][2]`, which accesses row 1, column 2 (value 60)."
  },
  {
    "id": "u2s5q7",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What will `std::string::find()` return if the target substring is NOT found?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = \"Master C++\";\n    if (str.find(\"Python\") == string::npos) {\n        cout << \"Not Found\";\n    }\n    return 0;\n}",
    "options": [
      "Not Found",
      "-1",
      "0",
      "NullPointerException"
    ],
    "correctAnswer": 0,
    "explanation": "When target substring is absent, `find()` returns `string::npos` (a special static constant representing maximum unsigned size_t value)."
  },
  {
    "id": "u2s5q8",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What is the output of `std::string::erase()` modifier function?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = \"HelloWorld\";\n    text.erase(5, 5);\n    cout << text;\n    return 0;\n}",
    "options": [
      "Hello",
      "World",
      "HelloWorld",
      "Empty string"
    ],
    "correctAnswer": 0,
    "explanation": "`erase(5, 5)` removes 5 characters starting from index 5 (\"World\"), leaving \"Hello\"."
  },
  {
    "id": "u2s5q9",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "How is a 2D array passed to a function in C++ main scope?",
    "code": "// Which function parameter signature for passing 2D array is valid?",
    "options": [
      "void process(int arr[][3], int rows)",
      "void process(int arr[][], int rows)",
      "void process(int arr[3][])",
      "void process(int [][]arr)"
    ],
    "correctAnswer": 0,
    "explanation": "When passing multidimensional arrays, all dimension sizes EXCEPT the first must be explicitly specified (e.g. `int arr[][3]`) so compiler can compute row offsets."
  },
  {
    "id": "u2s5q10",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What is the output of pointer to member function execution?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Calculator {\npublic:\n    int mult(int a, int b) { return a * b; }\n};\n\nint main() {\n    Calculator c;\n    int (Calculator::*pFunc)(int, int) = &Calculator::mult;\n    cout << (c.*pFunc)(4, 5);\n    return 0;\n}",
    "options": [
      "20",
      "9",
      "0",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`pFunc` is a pointer to member function `mult`. Invoking `(c.*pFunc)(4, 5)` returns 4 * 5 = 20."
  },
  {
    "id": "u2s5q11",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What is the output of `std::string::insert()` member modifier?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s = \"C Quiz\";\n    s.insert(1, \"++\");\n    cout << s;\n    return 0;\n}",
    "options": [
      "C++ Quiz",
      "C Quiz++",
      "C++Quiz",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`s.insert(1, \"++\")` inserts \"++\" at index position 1, transforming \"C Quiz\" into \"C++ Quiz\"."
  },
  {
    "id": "u2s5q12",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "In a 2D array `int grid[3][4]`, what is the type of `grid[0]`?",
    "code": "int grid[3][4];\n// What is the type of grid[0]?",
    "options": [
      "int* (Pointer to an array of 4 integers)",
      "int (Single integer)",
      "int** (Double pointer)",
      "int[][4]"
    ],
    "correctAnswer": 0,
    "explanation": "`grid[0]` decays to a pointer to the first element of row 0 (`int*`), pointing to `&grid[0][0]`."
  },
  {
    "id": "u2s5q13",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What will be the output of string comparison using `compare()` method?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = \"Apple\";\n    string str2 = \"Banana\";\n    if (str1.compare(str2) < 0) {\n        cout << \"Lexicographically Smaller\";\n    }\n    return 0;\n}",
    "options": [
      "Lexicographically Smaller",
      "Equal",
      "Greater",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "`str1.compare(str2)` compares ASCII values. Since \"Apple\" comes before \"Banana\" alphabetically, it returns a negative value (< 0)."
  },
  {
    "id": "u2s5q14",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What is the output of pointer to private member access via friend function?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Vault {\n    int key = 999;\npublic:\n    friend int getKey(Vault v);\n};\n\nint getKey(Vault v) {\n    int Vault::*p = &Vault::key;\n    return v.*p;\n}\n\nint main() {\n    Vault v;\n    cout << getKey(v);\n    return 0;\n}",
    "options": [
      "999",
      "0",
      "Compilation Error: key is private",
      "Runtime crash"
    ],
    "correctAnswer": 0,
    "explanation": "Because `getKey` is a friend function, taking a pointer to private data member `&Vault::key` is permitted inside `getKey`, returning 999."
  },
  {
    "id": "u2s5q15",
    "unitId": "unit2",
    "setId": "u2s5",
    "difficulty": "medium",
    "question": "What is the size in bytes of 3D array `int arr[2][3][4]` assuming 4-byte integers?",
    "code": "int arr[2][3][4]; // Total elements = 2 * 3 * 4 = 24",
    "options": [
      "96 bytes",
      "24 bytes",
      "48 bytes",
      "192 bytes"
    ],
    "correctAnswer": 0,
    "explanation": "Total elements = 2 * 3 * 4 = 24 integers. Total memory size = 24 * 4 bytes = 96 bytes."
  },
  {
    "id": "u3s1q1",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "In the C++ I/O stream hierarchy, which class is the foundational non-templated base class that manages state flags, formatting flags, and open mode constants?",
    "code": "#include <fstream>\n// What is the foundational non-templated base class of the C++ stream hierarchy?",
    "options": [
      "std::ios",
      "std::ios_base",
      "std::istream",
      "std::streambuf"
    ],
    "correctAnswer": 1,
    "explanation": "std::ios_base is the foundational non-templated base class in C++ standard streams. It defines stream state flags (goodbit, eofbit, failbit, badbit), openmode constants (in, out, app, trunc, etc.), and formatting flags."
  },
  {
    "id": "u3s1q2",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "Which class is the direct base class from which std::ifstream is derived?",
    "code": "#include <fstream>\n// Class hierarchy:\n// ? ----> std::ifstream",
    "options": [
      "std::istream",
      "std::iostream",
      "std::ios_base",
      "std::streambuf"
    ],
    "correctAnswer": 0,
    "explanation": "std::ifstream is derived directly from std::istream (which in turn virtually derives from std::ios, which derives from std::ios_base)."
  },
  {
    "id": "u3s1q3",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "Which standard stream class derives multiply from both std::istream and std::ostream to support bidirectional stream operations?",
    "code": "#include <iostream>\n// istream \\\n//          ---> [ ??? ]\n// ostream /",
    "options": [
      "std::fstream",
      "std::iostream",
      "std::ofstream",
      "std::ios"
    ],
    "correctAnswer": 1,
    "explanation": "std::iostream uses multiple inheritance to derive from both std::istream and std::ostream, providing combined extraction (>>) and insertion (<<) stream capabilities. std::fstream then derives from std::iostream."
  },
  {
    "id": "u3s1q4",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "What is the default open mode when instantiating an object of std::ofstream without specifying mode flags?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream outFile(\"records.txt\");\n    // Which open mode flags are applied by default?\n    return 0;\n}",
    "options": [
      "ios::out | ios::trunc",
      "ios::out | ios::app",
      "ios::in | ios::out",
      "ios::out | ios::ate"
    ],
    "correctAnswer": 0,
    "explanation": "std::ofstream defaults to open mode std::ios::out | std::ios::trunc. It opens the file for writing and truncates existing content to 0 bytes unless explicitly specified otherwise (such as with ios::app)."
  },
  {
    "id": "u3s1q5",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "What happens when std::ifstream opens a file in default mode (ios::in) if the file does not exist on disk?",
    "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream inFile(\"non_existent_file.txt\");\n    if (!inFile.is_open()) {\n        cout << \"Open Failed\";\n    }\n    return 0;\n}",
    "options": [
      "It creates a new empty file automatically",
      "Open Failed is output because ios::in requires the file to already exist",
      "The program aborts immediately with an unhandled exception",
      "A compilation error occurs"
    ],
    "correctAnswer": 1,
    "explanation": "Opening a file with std::ifstream (mode ios::in) requires the target file to already exist. If it does not exist, the stream fails to open, is_open() returns false, and failbit is set."
  },
  {
    "id": "u3s1q6",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "What is the primary behavioral difference between std::ios::app and std::ios::ate open modes?",
    "code": "// Stream A opened with ios::app\n// Stream B opened with ios::ate",
    "options": [
      "ios::app and ios::ate are completely identical synonyms",
      "ios::app repositions to EOF before every single write operation; ios::ate seeks to EOF only upon opening but allows random seeking thereafter",
      "ios::app works only on binary files, whereas ios::ate works only on text files",
      "ios::ate truncates the file, whereas ios::app preserves data"
    ],
    "correctAnswer": 1,
    "explanation": "With std::ios::app (append), all write operations are automatically redirected to the end of the file, regardless of any seekp calls. With std::ios::ate (at-the-end), the file pointer is placed at the end immediately upon opening, but you can freely seek backwards or forwards afterwards."
  },
  {
    "id": "u3s1q7",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "What does the std::ios::binary open mode flag accomplish?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream out(\"data.bin\", ios::out | ios::binary);\n    return 0;\n}",
    "options": [
      "It encrypts stream data using 256-bit AES encryption",
      "It inhibits OS newline translation (CRLF <-> LF) and EOF interpretation (0x1A), preserving raw byte patterns",
      "It restricts stream insertion to only integers and floats",
      "It compresses data using binary Huffman encoding"
    ],
    "correctAnswer": 1,
    "explanation": "std::ios::binary instructs the stream buffer to omit newline transformations (e.g. converting \\r\\n to \\n on Windows) and disable special character handling like Ctrl+Z (0x1A), operating on exact, raw byte streams."
  },
  {
    "id": "u3s1q8",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "Which header file must be included to use std::ifstream, std::ofstream, and std::fstream in C++?",
    "code": "// Which header provides file stream classes?\n#include <?????>",
    "options": [
      "<iostream>",
      "<fstream>",
      "<filestream>",
      "<stdio.h>"
    ],
    "correctAnswer": 1,
    "explanation": "The C++ standard header <fstream> declares std::ifstream, std::ofstream, and std::fstream."
  },
  {
    "id": "u3s1q9",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "What happens when calling close() on an active output file stream?",
    "code": "#include <fstream>\nusing namespace std;\n\nvoid logData() {\n    ofstream log(\"audit.log\", ios::app);\n    log << \"Transaction #9481\\n\";\n    log.close(); // What happens here?\n}",
    "options": [
      "Deletes the file from disk",
      "Flushes internal memory buffers associated with the underlying filebuf to persistent disk and releases the OS file descriptor",
      "Clears the string contents of memory but keeps the OS file descriptor locked",
      "Causes undefined behavior unless flush() was called previously"
    ],
    "correctAnswer": 1,
    "explanation": "Calling close() explicitly flushes any unwritten buffered bytes in the underlying filebuf to disk storage and releases the operating system file handle."
  },
  {
    "id": "u3s1q10",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "What is the default open mode for std::fstream?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    fstream fs(\"io.dat\");\n    // What are the default mode flags?\n    return 0;\n}",
    "options": [
      "ios::in | ios::out",
      "ios::in only",
      "ios::out | ios::trunc",
      "ios::binary"
    ],
    "correctAnswer": 0,
    "explanation": "std::fstream represents a bidirectional stream capable of both input extraction and output insertion; its default mode is std::ios::in | std::ios::out."
  },
  {
    "id": "u3s1q11",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "What is the difference between binding a file via parameterized constructor versus using the open() member function?",
    "code": "// Method 1:\nstd::ifstream f1(\"sample.txt\");\n\n// Method 2:\nstd::ifstream f2;\nf2.open(\"sample.txt\");",
    "options": [
      "Method 1 is faster because it bypasses OS system calls",
      "Both achieve the same binding; constructor binding handles initialization in one step, while open() allows reusing an existing stream object",
      "Method 2 is only allowed for binary files",
      "Method 1 does not check if the file exists"
    ],
    "correctAnswer": 1,
    "explanation": "Parameterized constructors open and associate the file upon object creation. The open() member function allows an existing stream object to be bound to a file later, or reused for another file after close() and clear()."
  },
  {
    "id": "u3s1q12",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "What happens to the contents of \"log.txt\" when executing the following code if \"log.txt\" already contained 1 MB of text?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream out(\"log.txt\", ios::out);\n    out << \"Started\";\n    out.close();\n    return 0;\n}",
    "options": [
      "The new text is appended at the very end of the 1 MB file",
      "The file is truncated to length 0 upon opening, resulting in a file containing only \"Started\"",
      "A runtime exception is thrown because ios::out cannot overwrite an existing file",
      "The file size remains 1 MB with the first 7 bytes overwritten"
    ],
    "correctAnswer": 1,
    "explanation": "When ios::out is specified without ios::app, ios::in, or ios::ate, ios::trunc is implied by default. The existing 1 MB of data is discarded (truncated to 0 bytes) upon opening."
  },
  {
    "id": "u3s1q13",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "Which member function queries whether a stream object is currently associated with an active open file?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream file(\"test.txt\");\n    if (file._______()) {\n        // File is open\n    }\n    return 0;\n}",
    "options": [
      "active()",
      "is_open()",
      "is_valid()",
      "connected()"
    ],
    "correctAnswer": 1,
    "explanation": "file.is_open() returns true if the stream object is currently associated with an open file."
  },
  {
    "id": "u3s1q14",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "Which open mode combination should be used to open an existing binary file for simultaneous read and write operations without truncating existing data?",
    "code": "#include <fstream>\n// What flags open an existing file for read/write in binary without truncating?",
    "options": [
      "ios::in | ios::out | ios::trunc",
      "ios::in | ios::out | ios::binary",
      "ios::out | ios::binary",
      "ios::in | ios::binary | ios::trunc"
    ],
    "correctAnswer": 1,
    "explanation": "Using std::ios::in | std::ios::out | std::ios::binary opens the file for bidirectional access in binary mode. Because ios::trunc is omitted, existing data is preserved and random access updates are possible."
  },
  {
    "id": "u3s1q15",
    "unitId": "unit3",
    "setId": "u3s1",
    "difficulty": "easy",
    "question": "Why is it good practice to call close() explicitly even though the file stream destructor automatically calls close() when leaving scope?",
    "code": "#include <fstream>\nusing namespace std;\n\nvoid process() {\n    ofstream out(\"data.tmp\");\n    out << \"Computation results\";\n    out.close(); // Why close explicitly here?\n    // 10 minutes of heavy processing follows...\n}",
    "options": [
      "Destructors are never called automatically in C++",
      "Explicit closure flushes buffers and promptly releases OS file descriptor locks before long-running out-of-scope execution",
      "Without close(), the file is deleted upon program exit",
      "Calling close() is required by the C++ standard to prevent memory leaks in heap"
    ],
    "correctAnswer": 1,
    "explanation": "While stream destructors call close() upon leaving scope, explicit closure guarantees immediate flushing and releases operating system file descriptors early, which is essential before long processing loops or before reopening the file."
  },
  {
    "id": "u3s2q1",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "Which internal state flag is set when an input operation attempts to read past the physical end of a file?",
    "code": "#include <fstream>\n// Which bit flag indicates an extraction attempt past EOF?",
    "options": [
      "failbit",
      "eofbit",
      "badbit",
      "goodbit"
    ],
    "correctAnswer": 1,
    "explanation": "eofbit is set in the stream state when an extraction operation attempts to read past the physical end of the file."
  },
  {
    "id": "u3s2q2",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "medium",
    "question": "When is eofbit actually set during file reading?",
    "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\n// Suppose file contains 1 integer: \"42\"\nint main() {\n    ifstream in(\"num.txt\");\n    int val;\n    in >> val; // (Step 1)\n    cout << in.eof() << \" \";\n    in >> val; // (Step 2)\n    cout << in.eof();\n    return 0;\n}",
    "options": [
      "1 1 (eofbit is set as soon as the last byte is read)",
      "0 1 (eofbit is set ONLY after a read attempt FAILS past physical EOF)",
      "0 0 (eofbit is never set unless badbit is set)",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "explanation": "Crucial C++ rule: eofbit is NOT set merely upon arriving at or reading the last byte! It is set only after an input extraction operation actually attempts to read PAST EOF and fails. Thus Step 1 succeeds (eof=0), and Step 2 attempts past EOF and sets eof=1."
  },
  {
    "id": "u3s2q3",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "medium",
    "question": "Why is using \"while (!file.eof())\" considered an anti-pattern in C++ file processing?",
    "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\n// Why is this loop flawed?\nvoid readNumbers(ifstream& file) {\n    int n;\n    while (!file.eof()) {\n        file >> n;\n        cout << n << \" \";\n    }\n}",
    "options": [
      "file.eof() is deprecated in modern C++20",
      "It causes the last read item to be printed twice if trailing whitespace exists, because eof() is only true AFTER a failed read",
      "file.eof() throws a runtime exception when EOF is reached",
      "It creates an infinite loop that can never terminate"
    ],
    "correctAnswer": 1,
    "explanation": "Because eof() is only set AFTER an extraction fails, when reaching the end of file (or trailing newline), the loop enters one extra iteration, file >> n fails, leaving n unchanged, and the last value is processed/printed twice."
  },
  {
    "id": "u3s2q4",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "What is the idiomatic and robust way to loop through formatted records until EOF in C++?",
    "code": "#include <fstream>\n#include <iostream>\nusing namespace std;\n\n// What is the canonical loop condition?",
    "options": [
      "while (file.good() != false)",
      "while (file >> id >> name >> score)",
      "while (!file.eof())",
      "for (; file.is_open(); )"
    ],
    "correctAnswer": 1,
    "explanation": "The idiomatic C++ pattern is while (file >> id >> name >> score) because the stream extraction operator returns a reference to the stream, which evaluates to true in a boolean context only if the extraction succeeded without setting failbit or badbit."
  },
  {
    "id": "u3s2q5",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "What does stream.fail() test for?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream in(\"data.txt\");\n    if (in.fail()) {\n        // What conditions make fail() return true?\n    }\n    return 0;\n}",
    "options": [
      "Returns true only if the disk is physically damaged",
      "Returns true if failbit OR badbit is set (e.g. formatting error or open failure)",
      "Returns true only when eofbit is set",
      "Returns true only if the file does not contain ASCII characters"
    ],
    "correctAnswer": 1,
    "explanation": "stream.fail() returns true if either failbit or badbit is set. It detects logical formatting errors (like trying to read letters into an integer) as well as open failures and severe I/O errors."
  },
  {
    "id": "u3s2q6",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "What kind of error typically sets the badbit in a C++ stream?",
    "code": "#include <fstream>\n// What triggers badbit?",
    "options": [
      "Reading an EOF character",
      "An unrecoverable low-level I/O error, such as a corrupted buffer or hardware disk failure",
      "Entering a string when an integer was expected",
      "Forgetting to call close()"
    ],
    "correctAnswer": 1,
    "explanation": "badbit indicates a fatal, unrecoverable low-level I/O error, such as hardware disk failure, buffer exhaustion, or loss of stream integrity."
  },
  {
    "id": "u3s2q7",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "medium",
    "question": "What is the purpose of stream.clear() in C++ stream handling?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream in(\"data.txt\");\n    int x;\n    while (in >> x) {} // Reads until EOF, setting eofbit and failbit\n    \n    // What must be done before re-seeking and reading again?\n    in.clear();\n    in.seekg(0, ios::beg);\n    return 0;\n}",
    "options": [
      "It erases all data inside data.txt on disk",
      "It clears/resets the internal stream error state flags (setting state back to goodbit)",
      "It deallocates the ifstream object from memory",
      "It closes the file stream and deletes temporary cache"
    ],
    "correctAnswer": 1,
    "explanation": "stream.clear() resets the stream state flags to goodbit by default. Once eofbit or failbit is set, all future operations (including seekg) fail silently until clear() is invoked."
  },
  {
    "id": "u3s2q8",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "Which member function returns the current bitmask representation of all internal stream state flags?",
    "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream in(\"data.txt\");\n    iostate state = in._______();\n    return 0;\n}",
    "options": [
      "status()",
      "rdstate()",
      "getState()",
      "flags()"
    ],
    "correctAnswer": 1,
    "explanation": "stream.rdstate() returns an object of type std::ios_base::iostate containing the current bitmask of stream state flags (goodbit, eofbit, failbit, badbit)."
  },
  {
    "id": "u3s2q9",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "What is the key difference between formatted extraction (>>) and unformatted reading (such as getline() or get())?",
    "code": "// Operation A:\nfile >> word;\n\n// Operation B:\ngetline(file, line);",
    "options": [
      "Operation A is faster on binary files than Operation B",
      "Formatted extraction (>>) skips leading whitespace delimiters (spaces, tabs, newlines) by default, while unformatted operations preserve whitespace and read raw characters",
      "Operation B can only read numerical digits",
      "Operation A requires the file to be opened in ios::binary mode"
    ],
    "correctAnswer": 1,
    "explanation": "Formatted extraction (operator>>) skips leading whitespace (spaces, tabs, newlines) and parses typed values. Unformatted operations like get() and getline() do not skip whitespace, extracting exact characters from the stream."
  },
  {
    "id": "u3s2q10",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "What does std::getline(inFile, str) do when it encounters a newline character (\\n)?",
    "code": "#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream file(\"text.txt\");\n    string s;\n    getline(file, s);\n    return 0;\n}",
    "options": [
      "It includes the \\n character inside str",
      "It extracts characters up to \\n, stores them in str, and extracts and discards \\n from the stream buffer",
      "It throws an exception because getline() only stops on EOF",
      "It leaves \\n in the stream buffer so the next read will see \\n"
    ],
    "correctAnswer": 1,
    "explanation": "std::getline reads until the delimiter (default \\n), stores the characters prior to the delimiter into the string, and extracts and discards the delimiter from the input stream."
  },
  {
    "id": "u3s2q11",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "medium",
    "question": "What will be printed by the following code if \"input.txt\" contains the text: \"100 Alice 95.5 # End\"?",
    "code": "#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream in(\"input.txt\");\n    int id; string name; double score;\n    if (in >> id >> name >> score) {\n        cout << id << \"-\" << name << \"-\" << score << \" \";\n    }\n    char marker;\n    if (in >> marker) {\n        cout << marker;\n    }\n    return 0;\n}",
    "options": [
      "100-Alice-95.5 #",
      "100-Alice-95.5 End",
      "100-Alice-95.5",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "explanation": "The first formatted extraction reads 100 into id, \"Alice\" into name, and 95.5 into score. The next formatted extraction in >> marker skips the intervening space and extracts the character '#', resulting in \"100-Alice-95.5 #\"."
  },
  {
    "id": "u3s2q12",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "Which unformatted member function inserts a single character into an output stream?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream out(\"test.txt\");\n    out.____('#'); // Write single character\n    return 0;\n}",
    "options": [
      "writeChar",
      "put",
      "insert",
      "push"
    ],
    "correctAnswer": 1,
    "explanation": "out.put(ch) is the unformatted stream member function used to insert a single character into an output stream."
  },
  {
    "id": "u3s2q13",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "medium",
    "question": "What happens when you attempt to extract non-numeric text into an integer variable using \"cin >> x\" or \"inFile >> x\"?",
    "code": "#include <iostream>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    stringstream ss(\"XYZ\");\n    int val = 99;\n    ss >> val;\n    cout << \"val=\" << val << \" fail=\" << ss.fail();\n    return 0;\n}",
    "options": [
      "val=0 fail=1 (In C++11 onwards, val is set to 0 and failbit is set)",
      "val=99 fail=0 (Stream ignores the string and keeps previous value with good state)",
      "Runtime crash with segmentation fault",
      "val=-1 fail=1"
    ],
    "correctAnswer": 0,
    "explanation": "When formatted extraction into an integer fails because non-numeric characters are encountered, failbit is set. Since C++11, value is set to 0 upon extraction failure (or max/min on overflow), and ss.fail() returns true."
  },
  {
    "id": "u3s2q14",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "easy",
    "question": "What does the function good() return on a C++ stream?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream in(\"test.txt\");\n    if (in.good()) {\n        // What is guaranteed here?\n    }\n    return 0;\n}",
    "options": [
      "Returns true if the file size is greater than zero",
      "Returns true if NO error state flag (eofbit, failbit, badbit) is set",
      "Returns true if the file is encrypted",
      "Returns true if the file is opened in binary mode"
    ],
    "correctAnswer": 1,
    "explanation": "stream.good() returns true if and only if none of the stream state error bits (eofbit, failbit, badbit) are set (rdstate() == 0)."
  },
  {
    "id": "u3s2q15",
    "unitId": "unit3",
    "setId": "u3s2",
    "difficulty": "medium",
    "question": "If a stream has encountered EOF and you want to seek back to the beginning to read again, what sequence of calls is required?",
    "code": "#include <fstream>\nusing namespace std;\n\nvoid rewindStream(ifstream& in) {\n    // How to properly seek back to the start after hitting EOF?\n}",
    "options": [
      "in.seekg(0, ios::beg); only",
      "in.clear(); followed by in.seekg(0, ios::beg);",
      "in.close(); without calling in.open()",
      "in.flush();"
    ],
    "correctAnswer": 1,
    "explanation": "When EOF is encountered, eofbit (and possibly failbit) is set. While error flags are set, seekg() will fail and do nothing. Calling in.clear() resets the error flags so that in.seekg(0, ios::beg) succeeds."
  },
  {
    "id": "u3s3q1",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "In C++ file stream processing, what are the names of the two distinct internal file position pointers?",
    "code": "// Pointer for input reading: ???\n// Pointer for output writing: ???",
    "options": [
      "Read Head and Write Head",
      "Get Pointer (g) and Put Pointer (p)",
      "In Pointer and Out Pointer",
      "Source Pointer and Target Pointer"
    ],
    "correctAnswer": 1,
    "explanation": "C++ streams maintain two distinct pointers: the Get Pointer (g) for input extraction (tellg, seekg) and the Put Pointer (p) for output insertion (tellp, seekp)."
  },
  {
    "id": "u3s3q2",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "easy",
    "question": "Which member function is used to report the current byte position of the Get Pointer in an input stream?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream in(\"data.bin\", ios::binary);\n    // Which function returns current read position?\n    return 0;\n}",
    "options": [
      "in.getpos()",
      "in.tellg()",
      "in.tellp()",
      "in.seekg()"
    ],
    "correctAnswer": 1,
    "explanation": "tellg() (tell get) returns the current byte position of the Get Pointer in an input stream."
  },
  {
    "id": "u3s3q3",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "easy",
    "question": "Which member function is used to report the current byte position of the Put Pointer in an output stream?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream out(\"data.bin\", ios::binary);\n    // Which function returns current write position?\n    return 0;\n}",
    "options": [
      "out.tellp()",
      "out.tellg()",
      "out.putpos()",
      "out.seekp()"
    ],
    "correctAnswer": 0,
    "explanation": "tellp() (tell put) returns the current byte position of the Put Pointer in an output stream."
  },
  {
    "id": "u3s3q4",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "What are the three seek origin constants defined inside std::ios_base for relative seeking?",
    "code": "file.seekg(offset, origin); // What can 'origin' be?",
    "options": [
      "ios::start, ios::middle, ios::end",
      "ios::beg, ios::cur, ios::end",
      "ios::first, ios::current, ios::last",
      "ios::front, ios::here, ios::back"
    ],
    "correctAnswer": 1,
    "explanation": "The three seek origin flags are std::ios::beg (beginning of file, offset 0), std::ios::cur (current pointer position), and std::ios::end (end of file)."
  },
  {
    "id": "u3s3q5",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "How do you determine the total size of a file in bytes using C++ standard streams?",
    "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream file(\"archive.zip\", ios::binary);\n    // Complete code to compute fileSize:\n    file.seekg(0, ios::end);\n    streampos fileSize = file._______();\n    return 0;\n}",
    "options": [
      "length()",
      "tellg()",
      "size()",
      "gcount()"
    ],
    "correctAnswer": 1,
    "explanation": "Seeking to the end of the stream with file.seekg(0, ios::end) and then querying file.tellg() returns the total byte offset from the start, which equals the file size in bytes."
  },
  {
    "id": "u3s3q6",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "To reposition the read pointer 100 bytes backwards from the end of the file, what is the correct syntax?",
    "code": "#include <fstream>\nusing namespace std;\n\nvoid seekBack(ifstream& file) {\n    // Seek 100 bytes from end\n}",
    "options": [
      "file.seekg(100, ios::end);",
      "file.seekg(-100, ios::end);",
      "file.seekp(-100, ios::beg);",
      "file.seekg(100, ios::cur);"
    ],
    "correctAnswer": 1,
    "explanation": "Because ios::end represents the end of the file, moving backwards into valid file content requires a negative stream offset: file.seekg(-100, ios::end)."
  },
  {
    "id": "u3s3q7",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "What types are used in C++ for absolute stream positions and relative stream offsets?",
    "code": "// Absolute stream position type: ???\n// Relative stream offset type: ???",
    "options": [
      "int and long",
      "std::streampos and std::streamoff",
      "size_t and ptrdiff_t",
      "std::filepos and std::fileoff"
    ],
    "correctAnswer": 1,
    "explanation": "std::streampos represents an absolute position in a stream, whereas std::streamoff represents a signed relative offset between stream positions."
  },
  {
    "id": "u3s3q8",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "easy",
    "question": "What is the function signature of ostream::write for unformatted binary output?",
    "code": "#include <fstream>\n// What are the parameters of out.write(...)?",
    "options": [
      "ostream& write(const char* buffer, std::streamsize numBytes);",
      "void write(void* data, int length);",
      "ostream& write(std::string text);",
      "bool write(const void* buffer, size_t size);"
    ],
    "correctAnswer": 0,
    "explanation": "ostream& write(const char* buffer, std::streamsize numBytes); is the exact signature defined in the C++ standard for writing raw byte buffers."
  },
  {
    "id": "u3s3q9",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "easy",
    "question": "Why must reinterpret_cast<char*> or reinterpret_cast<const char*> be used when calling stream read() and write() on user structures?",
    "code": "struct Record { int id; double val; };\nRecord r = {1, 99.5};\nout.write(reinterpret_cast<const char*>(&r), sizeof(Record));",
    "options": [
      "To convert text to JSON formatting",
      "Because read() and write() require a pointer-to-character (char* / const char*) buffer representing raw bytes",
      "To encrypt the record struct using C++ type safety",
      "Because C++ does not support pointers to structs"
    ],
    "correctAnswer": 1,
    "explanation": "Binary read() and write() member functions are designed to operate on raw byte sequences through char* or const char* pointers. Custom structs and primitive types must be cast using reinterpret_cast to satisfy the parameter type."
  },
  {
    "id": "u3s3q10",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "easy",
    "question": "Which member function returns the number of characters/bytes actually extracted by the last unformatted read operation?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream file(\"test.bin\", ios::binary);\n    char buf[128];\n    file.read(buf, 128);\n    streamsize bytesRead = file._______();\n    return 0;\n}",
    "options": [
      "readBytes()",
      "gcount()",
      "extracted()",
      "size()"
    ],
    "correctAnswer": 1,
    "explanation": "stream.gcount() (get count) returns the number of characters/bytes successfully extracted by the most recent unformatted read operation (such as read, get, or getline)."
  },
  {
    "id": "u3s3q11",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "What is the output of the following binary write and seekg read program?",
    "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    fstream fs(\"nums.dat\", ios::in | ios::out | ios::binary | ios::trunc);\n    int nums[3] = {10, 20, 30};\n    fs.write(reinterpret_cast<const char*>(nums), sizeof(nums));\n    \n    // Seek to second integer\n    fs.seekg(1 * sizeof(int), ios::beg);\n    int readVal = 0;\n    fs.read(reinterpret_cast<char*>(&readVal), sizeof(int));\n    cout << readVal;\n    return 0;\n}",
    "options": [
      "10",
      "20",
      "30",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "Seeking to 1 * sizeof(int) from the beginning skips the first integer (nums[0] = 10) and positions the Get Pointer at nums[1]. Reading sizeof(int) bytes loads 20 into readVal."
  },
  {
    "id": "u3s3q12",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "What happens if file.read(buffer, 100) attempts to read 100 bytes from a file that only has 40 bytes remaining?",
    "code": "#include <fstream>\nusing namespace std;\n\nvoid readData(ifstream& file) {\n    char buf[100];\n    file.read(buf, 100);\n    // What happens to file state and gcount()?\n}",
    "options": [
      "The program aborts immediately",
      "40 bytes are read into buf, gcount() returns 40, and both eofbit and failbit are set",
      "The buffer is filled with 60 garbage bytes and goodbit remains set",
      "file.read() hangs waiting for more input from disk"
    ],
    "correctAnswer": 1,
    "explanation": "When read() reaches EOF before reading the requested number of bytes, it extracts all available bytes (so gcount() returns 40) and sets both eofbit and failbit."
  },
  {
    "id": "u3s3q13",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "How do you advance the Put Pointer forward by 64 bytes relative to its current location?",
    "code": "#include <fstream>\nusing namespace std;\n\nvoid skipForward(ofstream& file) {\n    // Advance put pointer 64 bytes from current position\n}",
    "options": [
      "file.seekp(64, ios::beg);",
      "file.seekp(64, ios::cur);",
      "file.seekg(64, ios::cur);",
      "file.seekp(64, ios::end);"
    ],
    "correctAnswer": 1,
    "explanation": "seekp modifies the Put Pointer, and using std::ios::cur specifies seeking relative to the current position. Thus file.seekp(64, ios::cur); advances it by 64 bytes."
  },
  {
    "id": "u3s3q14",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "What is the advantage of binary file I/O over formatted text file I/O?",
    "code": "double pi = 3.141592653589793;\n// Text vs Binary storage",
    "options": [
      "Binary I/O can be opened in text editors like Notepad without any gibberish",
      "Binary I/O preserves the exact bit-level representation in memory with zero string parsing or formatting overhead and fixed predictable sizes",
      "Binary I/O takes more disk space than text I/O",
      "Binary I/O automatically fixes byte endianness across different CPU architectures"
    ],
    "correctAnswer": 1,
    "explanation": "Binary I/O directly dumps and loads raw memory bytes without character conversion or delimiter parsing. It is faster, preserves exact numerical precision, and has deterministic record sizes."
  },
  {
    "id": "u3s3q15",
    "unitId": "unit3",
    "setId": "u3s3",
    "difficulty": "medium",
    "question": "When performing sequential read after a write on a bidirectional fstream without repositioning, what is a common pitfall?",
    "code": "#include <fstream>\nusing namespace std;\n\nint main() {\n    fstream fs(\"test.bin\", ios::in | ios::out | ios::binary | ios::trunc);\n    int x = 50;\n    fs.write(reinterpret_cast<char*>(&x), sizeof(x));\n    int y;\n    fs.read(reinterpret_cast<char*>(&y), sizeof(y)); // What happens here?\n    return 0;\n}",
    "options": [
      "y will read 50 successfully",
      "The read attempts to read at the current write position (end of file) and fails, setting eofbit and failbit",
      "The file is automatically rewound before reading",
      "A compile-time error occurs because fstream cannot read after write"
    ],
    "correctAnswer": 1,
    "explanation": "After writing x, the stream pointer is at the end of the written data. Attempting to read immediately without seeking back (e.g. fs.seekg(0, ios::beg)) attempts to read past EOF, causing the read to fail."
  },
  {
    "id": "u3s4q1",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "When implementing random access to the n-th record in a binary file of fixed-size structs (1-based index), what is the byte offset formula?",
    "code": "struct Employee { int id; char name[32]; double salary; };\n// Byte offset to access record number n (1, 2, 3...):",
    "options": [
      "offset = n * sizeof(Employee)",
      "offset = (n - 1) * sizeof(Employee)",
      "offset = n + sizeof(Employee)",
      "offset = sizeof(Employee) / n"
    ],
    "correctAnswer": 1,
    "explanation": "For a 1-based index (where the 1st record is at offset 0), the n-th record is located at byte position (n - 1) * sizeof(Employee)."
  },
  {
    "id": "u3s4q2",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "hard",
    "question": "Why is binary serialization using reinterpret_cast<char*>(this) with write() HAZARDOUS for a C++ class that contains virtual functions?",
    "code": "class Account {\npublic:\n    virtual void calculateInterest() {} // Virtual function present\n    int accountId;\n    double balance;\n    void save(ofstream& out) {\n        out.write(reinterpret_cast<const char*>(this), sizeof(Account));\n    }\n};",
    "options": [
      "Virtual functions cause the sizeof(Account) operator to fail to compile",
      "It writes the internal virtual function table pointer (vptr) to disk; when reloaded in another run or memory space, that address is invalid and calling virtual functions causes a crash or undefined behavior",
      "Virtual functions encrypt class data using CPU registers",
      "C++ standards forbid classes with member functions from being saved to files"
    ],
    "correctAnswer": 1,
    "explanation": "Classes with virtual functions contain an internal compiler-managed vptr (virtual table pointer) pointing to process memory. Dumping this pointer to disk and reading it back into a new process results in a dangling vptr; invoking any virtual function will trigger undefined behavior or a segmentation fault."
  },
  {
    "id": "u3s4q3",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "hard",
    "question": "Why is binary persistence via write(reinterpret_cast<const char*>(this), sizeof(MyClass)) invalid for a class containing a std::string or raw pointer member?",
    "code": "class Student {\n    int rollNo;\n    std::string name; // Dynamic string!\npublic:\n    void save(ofstream& out) {\n        out.write(reinterpret_cast<const char*>(this), sizeof(Student));\n    }\n};",
    "options": [
      "std::string is private in the C++ standard library",
      "Writing sizeof(Student) writes only the internal pointer/metadata of std::string, not the heap payload; upon reload, the pointer points to dangling, invalid memory",
      "std::string cannot be compiled when inside a class",
      "Binary streams convert all string characters to null bytes"
    ],
    "correctAnswer": 1,
    "explanation": "std::string manages its character buffer dynamically on the heap. Writing sizeof(Student) copies only the fixed internal struct (the pointer address and size), not the heap data. On reload, the restored pointer points to an unallocated or invalid heap address, leading to memory corruption or crashes."
  },
  {
    "id": "u3s4q4",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "What type of C++ classes or structs are safe for direct binary serialization using reinterpret_cast<char*>?",
    "code": "#include <type_traits>\n// Which category of types can be safely dumped/loaded via raw byte copying?",
    "options": [
      "Polymorphic abstract classes",
      "Plain Old Data (POD) types or Trivially Copyable types without pointers or virtual tables",
      "Classes that inherit from std::exception",
      "Classes with private virtual destructors"
    ],
    "correctAnswer": 1,
    "explanation": "Only Plain Old Data (POD) or Trivially Copyable types (types with trivial copy constructors, trivial destructors, no virtual tables, and no pointers to dynamic memory) can be safely serialized via raw byte copying."
  },
  {
    "id": "u3s4q5",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "What is the correct way to store text inside a class meant for fixed-size binary record serialization?",
    "code": "class Book {\n    int isbn;\n    // How should title be declared for safe fixed-size binary persistence?\n    double price;\n};",
    "options": [
      "std::string title;",
      "char title[64]; with explicit null-termination",
      "char* title;",
      "std::vector<char> title;"
    ],
    "correctAnswer": 1,
    "explanation": "Using a fixed-size char array (char title[64];) embeds the string characters directly within the object memory footprint, keeping the object Trivially Copyable and ensuring all text bytes are persisted directly."
  },
  {
    "id": "u3s4q6",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "In Example 2 of the notes, what sequence of stream operations is used to modify an employee salary in-place?",
    "code": "// Modify record at recordIndex in \"employees.dat\"\nstd::streampos position = recordIndex * sizeof(Employee);\nfile.seekg(position, std::ios::beg);\nEmployee emp;\nif (file.read(reinterpret_cast<char*>(&emp), sizeof(Employee))) {\n    emp.salary = newSalary;\n    // What must be done before writing back?\n}",
    "options": [
      "file.seekp(position, std::ios::beg); file.write(reinterpret_cast<const char*>(&emp), sizeof(Employee)); file.flush();",
      "file.close(); file.open(\"employees.dat\", ios::trunc);",
      "file.seekg(0, ios::end); file.write(reinterpret_cast<const char*>(&emp), sizeof(Employee));",
      "file >> emp.salary;"
    ],
    "correctAnswer": 0,
    "explanation": "To update the record in-place, the Put Pointer must be repositioned to the exact record offset using file.seekp(position, std::ios::beg), followed by file.write(...) and file.flush()."
  },
  {
    "id": "u3s4q7",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "Why is file.flush() recommended after performing an in-place binary record write?",
    "code": "file.write(reinterpret_cast<const char*>(&emp), sizeof(Employee));\nfile.flush(); // Why flush here?",
    "options": [
      "To delete previous records from the hard drive",
      "To force the stream buffer to push written bytes immediately to the operating system file without waiting for buffer overflow or stream closure",
      "To clear the failbit on the stream",
      "To rewind the Get pointer back to the beginning"
    ],
    "correctAnswer": 1,
    "explanation": "flush() forces any modified data lingering in the runtime stream buffer to be written through to the underlying operating system file immediately, ensuring data integrity."
  },
  {
    "id": "u3s4q8",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "What will be the output of this code reading back serialized objects?",
    "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nstruct Item { int id; int qty; };\n\nint main() {\n    ofstream out(\"items.bin\", ios::binary);\n    Item i1 = {101, 5}, i2 = {102, 12};\n    out.write(reinterpret_cast<char*>(&i1), sizeof(Item));\n    out.write(reinterpret_cast<char*>(&i2), sizeof(Item));\n    out.close();\n\n    ifstream in(\"items.bin\", ios::binary);\n    Item temp;\n    int count = 0;\n    while (in.read(reinterpret_cast<char*>(&temp), sizeof(Item))) {\n        count += temp.qty;\n    }\n    cout << count;\n    return 0;\n}",
    "options": [
      "17",
      "5",
      "12",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "The while loop reads each Item structure sequentially until EOF. On the first iteration temp.qty is 5; on the second iteration temp.qty is 12. Sum = 17."
  },
  {
    "id": "u3s4q9",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "What is the value of out.good() after write() successfully writes a binary object?",
    "code": "bool writeToFile(std::ofstream& out) const {\n    out.write(reinterpret_cast<const char*>(this), sizeof(Book));\n    return out.good();\n}",
    "options": [
      "true, indicating no error flags were set during writing",
      "false, because write() always sets eofbit",
      "An integer representing the number of bytes written",
      "undefined behavior"
    ],
    "correctAnswer": 0,
    "explanation": "If write() completes without encountering any I/O faults, the stream state remains clear and out.good() returns true."
  },
  {
    "id": "u3s4q10",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "hard",
    "question": "Consider two computers: Machine A is Little-Endian (x86_64) and Machine B is Big-Endian (SPARC/Network). What problem occurs if raw binary files written on Machine A are read directly on Machine B?",
    "code": "int x = 0x12345678;\nout.write(reinterpret_cast<char*>(&x), sizeof(x));",
    "options": [
      "The file cannot be opened because open() checks CPU architecture",
      "Endian mismatch: the multi-byte integer byte order is reversed (0x78 0x56 0x34 0x12 vs 0x12 0x34 0x56 0x78), producing corrupted values",
      "C++ automatically converts byte order on disk in all streams",
      "The file size will double"
    ],
    "correctAnswer": 1,
    "explanation": "Raw binary serialization writes bytes exactly as ordered in host RAM. Little-endian stores least-significant byte first, while big-endian stores most-significant byte first. Transferring raw binary files between differing architectures results in reversed multi-byte values unless normalized."
  },
  {
    "id": "u3s4q11",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "Why must you avoid ios::trunc when opening a file with fstream for in-place database modifications?",
    "code": "#include <fstream>\nusing namespace std;\n\n// Why is ios::trunc dangerous here?\nfstream file(\"database.dat\", ios::in | ios::out | ios::binary | ios::trunc);",
    "options": [
      "ios::trunc is forbidden in binary mode",
      "ios::trunc wipes the entire existing file contents to 0 bytes upon opening, destroying all existing records",
      "ios::trunc prevents seekg from moving past byte 0",
      "ios::trunc makes the file read-only"
    ],
    "correctAnswer": 1,
    "explanation": "std::ios::trunc truncates the file length to 0 bytes upon opening. Opening an existing database with ios::trunc erases all preexisting records."
  },
  {
    "id": "u3s4q12",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "What is struct padding, and how does it relate to sizeof(Struct) during binary file I/O?",
    "code": "struct Header {\n    char type;    // 1 byte\n    int version;  // 4 bytes\n};",
    "options": [
      "Compilers add padding bytes between members for CPU memory alignment, so sizeof(Header) may be 8 bytes instead of 5",
      "Padding is extra comments placed in the binary file",
      "Structs are always compressed to the nearest power of 2",
      "Padding only occurs when virtual inheritance is used"
    ],
    "correctAnswer": 0,
    "explanation": "Due to hardware memory alignment requirements, compilers insert alignment padding bytes. Here, 3 padding bytes follow char type so that int version aligns on a 4-byte boundary, making sizeof(Header) = 8 bytes. Binary I/O reads and writes these padding bytes as part of the struct."
  },
  {
    "id": "u3s4q13",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "In C++, can private member variables of a class be written to a binary file by an encapsulated member function?",
    "code": "class Vault {\nprivate:\n    int secretKey = 777;\npublic:\n    void serialize(ofstream& out) const {\n        out.write(reinterpret_cast<const char*>(this), sizeof(Vault));\n    }\n};",
    "options": [
      "No, file streams only have access to public members",
      "Yes, member functions have access to all private members, and writing raw object bytes via (this) serializes the entire object memory layout",
      "No, private variables are skipped during binary write",
      "Only if the stream is declared as a friend of Vault"
    ],
    "correctAnswer": 1,
    "explanation": "Encapsulated member functions have full access to class members, and raw byte serialization dumps the full memory footprint occupied by (this), including private fields."
  },
  {
    "id": "u3s4q14",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "medium",
    "question": "What happens if a program attempts to seek to record index 10 in a binary file that only contains 3 records?",
    "code": "fstream file(\"records.dat\", ios::in | ios::out | ios::binary);\nfile.seekg(10 * sizeof(Record), ios::beg);\nRecord r;\nbool ok = file.read(reinterpret_cast<char*>(&r), sizeof(Record));",
    "options": [
      "The file automatically expands to 10 records filled with zeroes",
      "The read operation fails, ok evaluates to false, and eofbit and failbit are set on the stream",
      "The OS throws a Blue Screen / Kernel Panic",
      "r is populated with random records from elsewhere on the hard drive"
    ],
    "correctAnswer": 1,
    "explanation": "Seeking beyond the physical end of file and attempting to read will fail. read() extracts 0 bytes, sets eofbit and failbit, and returns a stream in fail state."
  },
  {
    "id": "u3s4q15",
    "unitId": "unit3",
    "setId": "u3s4",
    "difficulty": "easy",
    "question": "In the Book class from the notes, why is std::strncpy used with \"sizeof(title) - 1\" followed by explicit null-termination?",
    "code": "Book(int id, const std::string& bTitle, double p) : isbn(id), price(p) {\n    std::strncpy(title, bTitle.c_str(), sizeof(title) - 1);\n    title[sizeof(title) - 1] = '\\0';\n}",
    "options": [
      "To prevent buffer overflow and guarantee that the C-style string is always null-terminated even if bTitle exceeds 64 bytes",
      "Because strncpy requires titles to be in uppercase",
      "To encrypt the title in binary storage",
      "Because std::string cannot be converted to const char*"
    ],
    "correctAnswer": 0,
    "explanation": "strncpy prevents buffer overflow by capping copies to sizeof(title)-1 bytes, and explicitly assigning title[sizeof(title)-1] = '\\0' guarantees valid null-termination even when input exceeds the fixed buffer capacity."
  },
  {
    "id": "u3s5q1",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "easy",
    "question": "Under what condition does the C++ compiler automatically synthesize a default constructor for a class?",
    "code": "class Sample {\n    int value;\n};\n// Does the compiler generate Sample() {}?",
    "options": [
      "Only if the class has virtual methods",
      "Only if NO constructor of any kind is declared by the user in the class",
      "Always, regardless of any user-defined parameterized constructors",
      "Only if all members are public"
    ],
    "correctAnswer": 1,
    "explanation": "The compiler automatically synthesizes a default constructor only if no user constructor of any kind is declared. If any user constructor is supplied, compiler synthesis of the default constructor is suppressed."
  },
  {
    "id": "u3s5q2",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "medium",
    "question": "How can you instruct the compiler to synthesize the default constructor when a parameterized constructor has already been defined?",
    "code": "class Device {\n    int id;\npublic:\n    Device(int dId) : id(dId) {}\n    // How to explicitly request compiler default constructor?\n};",
    "options": [
      "Device() = default;",
      "Device() = auto;",
      "Device() = synthesize;",
      "Device() {} is the only way"
    ],
    "correctAnswer": 0,
    "explanation": "Using Device() = default; explicitly directs the compiler to generate its default implementation for the default constructor."
  },
  {
    "id": "u3s5q3",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "medium",
    "question": "Why should single-argument constructors typically be declared with the explicit keyword in C++?",
    "code": "class Box {\n    int size;\npublic:\n    explicit Box(int s) : size(s) {}\n};",
    "options": [
      "To make the constructor run faster",
      "To prevent the compiler from performing unwanted implicit type conversions from the argument type to the class type",
      "To allow the constructor to be overloaded",
      "To force the constructor to be placed in read-only memory"
    ],
    "correctAnswer": 1,
    "explanation": "The explicit specifier prevents unwanted implicit conversions and copy-initializations (e.g. Box b = 42; would be blocked if explicit, requiring Box b(42);)."
  },
  {
    "id": "u3s5q4",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "easy",
    "question": "If a constructor defines default values for ALL of its parameters, what additional role does it serve?",
    "code": "class Complex {\n    double real, imag;\npublic:\n    Complex(double r = 0.0, double i = 0.0) : real(r), imag(i) {}\n};",
    "options": [
      "It functions as a copy constructor",
      "It also functions as a default constructor because it can be called with zero arguments",
      "It acts as a conversion operator to double",
      "It becomes a virtual destructor"
    ],
    "correctAnswer": 1,
    "explanation": "Because all parameters have default values, the constructor can be called with 0 arguments (e.g. Complex c;), meaning it fulfills the requirement of a default constructor."
  },
  {
    "id": "u3s5q5",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "hard",
    "question": "What fatal runtime bug occurs when using the compiler-generated shallow copy on an object managing dynamically allocated heap memory?",
    "code": "class DynamicBuffer {\n    char* data;\npublic:\n    DynamicBuffer(size_t sz) : data(new char[sz]) {}\n    ~DynamicBuffer() { delete[] data; }\n};\n\nint main() {\n    DynamicBuffer b1(64);\n    DynamicBuffer b2 = b1; // Default shallow copy\n    return 0;\n}",
    "options": [
      "Compilation error: delete[] cannot be used in a destructor",
      "Double-Free Crash: both b1 and b2 hold the same pointer address; when both destructors execute, they delete the same heap memory twice",
      "Memory leak: heap memory is never freed",
      "The program runs safely without any issues"
    ],
    "correctAnswer": 1,
    "explanation": "A default shallow copy performs a bitwise copy of member variables, causing b1.data and b2.data to point to the exact same heap memory block. When b2 is destroyed, its destructor deletes data. When b1 is then destroyed, it attempts to delete already-freed memory, causing an undefined behavior / double-free runtime crash."
  },
  {
    "id": "u3s5q6",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "medium",
    "question": "What is the correct signature for a copy constructor in a class named Widget?",
    "code": "class Widget {\npublic:\n    // What is the canonical copy constructor signature?\n};",
    "options": [
      "Widget(Widget other);",
      "Widget(const Widget& other);",
      "Widget(Widget* other);",
      "void copy(const Widget& other);"
    ],
    "correctAnswer": 1,
    "explanation": "The standard signature for a copy constructor is Widget(const Widget& other); taking a reference to const. Passing by value (Widget(Widget other)) is illegal because it would require calling the copy constructor recursively to pass the argument."
  },
  {
    "id": "u3s5q7",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "hard",
    "question": "Which of the following members MANDATORILY requires the use of a Member Initializer List in its constructor?",
    "code": "class Config {\n    // Which of these CANNOT be initialized inside the constructor body?\n};",
    "options": [
      "Normal int and double variables",
      "const member variables and reference members (Type&)",
      "Static member variables",
      "Raw pointer variables"
    ],
    "correctAnswer": 1,
    "explanation": "Member initializer lists are mandatory for: (1) const member variables, (2) reference members (Type&), (3) member objects lacking a default constructor, and (4) base class parameterized constructors."
  },
  {
    "id": "u3s5q8",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "hard",
    "question": "In what order are member variables initialized when using a Member Initializer List?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass OrderTest {\n    int b;\n    int a;\npublic:\n    OrderTest(int val) : a(val), b(a + 10) {\n        cout << \"a=\" << a << \" b=\" << b;\n    }\n};",
    "options": [
      "In the order they are written in the initializer list (a is initialized first, then b)",
      "In the order of their DECLARATION in the class definition (b is initialized first with uninitialized a, leading to undefined behavior)",
      "Alphabetically by variable name",
      "The compiler reorders them at runtime randomly"
    ],
    "correctAnswer": 1,
    "explanation": "Crucial C++ rule: Member variables are always initialized in the order of their DECLARATION in the class definition, regardless of their order in the constructor initializer list! Because b is declared before a, b(a + 10) executes while a is uninitialized garbage, resulting in undefined behavior."
  },
  {
    "id": "u3s5q9",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "easy",
    "question": "Which of the following is true regarding C++ destructors?",
    "code": "class CleanUp {\npublic:\n    ~CleanUp(); // Destructor\n};",
    "options": [
      "Destructors can take integer parameters for exit codes",
      "Destructors can be overloaded with multiple signatures",
      "Destructors take no arguments, return no values, and cannot be overloaded",
      "Destructors must return a bool indicating cleanup status"
    ],
    "correctAnswer": 2,
    "explanation": "Destructors take no arguments, return no values, and cannot be overloaded. A class can have exactly one destructor."
  },
  {
    "id": "u3s5q10",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "medium",
    "question": "What is the destruction order for local automatic (stack) objects in C++?",
    "code": "#include <iostream>\nusing namespace std;\n\nclass Tracer {\n    int id;\npublic:\n    Tracer(int i) : id(i) {}\n    ~Tracer() { cout << id << \" \"; }\n};\n\nint main() {\n    Tracer t1(1);\n    Tracer t2(2);\n    Tracer t3(3);\n    return 0;\n}",
    "options": [
      "1 2 3",
      "3 2 1",
      "2 1 3",
      "1 3 2"
    ],
    "correctAnswer": 1,
    "explanation": "Destruction order of automatic stack objects is strictly the reverse of construction order (stack LIFO: Last-In, First-Out). t3 is destroyed first, then t2, then t1, printing \"3 2 1\"."
  },
  {
    "id": "u3s5q11",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "medium",
    "question": "What does the acronym RAII stand for in C++?",
    "code": "// Core idiom in modern C++ resource management:\n// R - A - I - I",
    "options": [
      "Runtime Allocation In Implementation",
      "Resource Acquisition Is Initialization",
      "Reference Access Inside Interfaces",
      "Read Access In Input"
    ],
    "correctAnswer": 1,
    "explanation": "RAII stands for Resource Acquisition Is Initialization. Resources (files, memory, locks, sockets) are acquired in a constructor and automatically released in the destructor when the object leaves scope."
  },
  {
    "id": "u3s5q12",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "medium",
    "question": "How does an RAII class like RAIIFileManager prevent double-closing the underlying OS file descriptor when someone attempts to copy it?",
    "code": "class RAIIFileManager {\n    std::fstream fileStream;\npublic:\n    // How to prohibit copying?\n    RAIIFileManager(const RAIIFileManager&) = delete;\n    RAIIFileManager& operator=(const RAIIFileManager&) = delete;\n};",
    "options": [
      "By throwing a compiler error whenever copying is attempted, using \"= delete\"",
      "By converting copy requests to move requests automatically",
      "By making the destructor private",
      "By declaring the class inside an anonymous namespace"
    ],
    "correctAnswer": 0,
    "explanation": "Marking the copy constructor and copy assignment operator with \"= delete\" explicitly prohibits copying, preventing multiple objects from sharing and closing the same underlying file handle."
  },
  {
    "id": "u3s5q13",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "medium",
    "question": "What major benefit does RAII provide in the presence of runtime exceptions?",
    "code": "void processFile() {\n    RAIIFileManager mgr(\"log.txt\", ios::out);\n    mgr.writeLine(\"Starting operation\");\n    throw runtime_error(\"Network timeout!\");\n    // What happens to mgr?\n}",
    "options": [
      "The file remains permanently open and corrupted on disk",
      "Stack unwinding automatically invokes the destructor of mgr, ensuring the file is flushed and closed safely despite the exception",
      "The program hangs waiting for user input",
      "The exception is suppressed by the file manager"
    ],
    "correctAnswer": 1,
    "explanation": "When an exception is thrown, stack unwinding occurs, destroying all local stack objects in reverse order of creation. The RAII destructor runs during unwinding, guaranteeing resource release without memory leaks."
  },
  {
    "id": "u3s5q14",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "medium",
    "question": "What is the performance advantage of using Member Initializer Lists compared to assigning fields inside the constructor body?",
    "code": "// Method A (Initializer list):\nPerson(string n) : name(n) {}\n\n// Method B (Body assignment):\nPerson(string n) { name = n; }",
    "options": [
      "Method A initializes the member directly in place; Method B calls the default constructor first, followed immediately by an unnecessary copy assignment operator",
      "Method B is faster because it uses CPU cache",
      "There is zero difference in performance for any type",
      "Method A disables compiler optimization"
    ],
    "correctAnswer": 0,
    "explanation": "In Method B, member objects (like std::string) are first default-constructed before the constructor body executes, and then overwritten by copy assignment. Method A directly initializes the field with the copy/move constructor, avoiding redundant default construction."
  },
  {
    "id": "u3s5q15",
    "unitId": "unit3",
    "setId": "u3s5",
    "difficulty": "hard",
    "question": "In the BufferManager implementation from Example 4, why does the deep copy constructor allocate \"new char[other.capacity]\"?",
    "code": "BufferManager(const BufferManager& other)\n    : capacity(other.capacity), externalRef(other.externalRef), \n      data(new char[other.capacity]) {\n    std::strncpy(data, other.data, capacity - 1);\n    data[capacity - 1] = '\\0';\n}",
    "options": [
      "To ensure that each BufferManager instance owns an independent heap allocation so modifying or deleting one buffer does not affect or corrupt the other",
      "To allow the operating system to share virtual memory pages",
      "Because the compiler refuses to compile shallow copy with new char[]",
      "To ensure capacity is a multiple of 128"
    ],
    "correctAnswer": 0,
    "explanation": "The deep copy constructor allocates distinct heap memory for the newly created instance and copies the character elements over. This decouples the instances, ensuring each owns its separate buffer and eliminating double-free crashes upon destruction."
  }
];
