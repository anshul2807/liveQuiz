// Comprehensive Curriculum Question Bank
// Subject 1: OOPs in CPP (Units I, II, III - 135 MCQs across Easy, Medium, Hard)
// Subject 2: DSA (Units I, II, III - 135 MCQs across Easy, Medium, Hard)
// Total 270 High-Quality MCQs with Code Snippets & Explanations

export const SUBJECTS = [
  {
    "id": "oops",
    "name": "OOPs in CPP",
    "code": "CSE202",
    "description": "Object-Oriented Programming: classes, objects, pointers, references, dynamic memory, file I/O, constructors, and RAII in C++."
  },
  {
    "id": "dsa",
    "name": "DSA",
    "code": "DSA",
    "description": "Data Structures & Algorithms: asymptotic complexity analysis, arrays, sorting, searching, linked lists, stacks, queues, and deques."
  }
];

export const SYLLABUS_UNITS = [
  {
    "id": "unit1",
    "subjectId": "oops",
    "title": "Unit I: Concepts and Basics of C++ Programming",
    "description": "OOP vs Procedural, cin/cout, Classes, Objects, Access Specifiers, Structs/Unions/Enums, Inline/Static functions, Friend functions, Function Overloading, Recursion.",
    "sets": [
      {
        "id": "u1_easy",
        "title": "Section 1: Basics & Foundations",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u1_medium",
        "title": "Section 2: Functions, Scope & Overloading",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u1_hard",
        "title": "Section 3: Advanced OOP Mechanics & Edge Cases",
        "difficulty": "hard",
        "questionCount": 15
      }
    ]
  },
  {
    "id": "unit2",
    "subjectId": "oops",
    "title": "Unit II: Pointers, Reference Variables, Arrays & String Concepts",
    "description": "Void pointers, Pointer Arithmetic, Pointer to Pointer, Memory hazards (Dangling/Wild/Null), this pointer, Array of Objects, std::string class, Multidimensional Arrays.",
    "sets": [
      {
        "id": "u2_easy",
        "title": "Section 1: Basic Pointers & References",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u2_medium",
        "title": "Section 2: Pointer Arithmetic & Strings",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u2_hard",
        "title": "Section 3: Pointers to Pointers & Memory Hazards",
        "difficulty": "hard",
        "questionCount": 15
      }
    ]
  },
  {
    "id": "unit3",
    "subjectId": "oops",
    "title": "Unit III: File Operations, Constructors, and Destructors in C++",
    "description": "File streams hierarchy, open modes & flags, text vs binary I/O, random access seeking, struct/class object persistence, constructors, deep copy, initializer lists, RAII.",
    "sets": [
      {
        "id": "u3_easy",
        "title": "Section 1: Stream Hierarchy & File Modes",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "u3_medium",
        "title": "Section 2: Binary I/O & Random Access Seeking",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "u3_hard",
        "title": "Section 3: RAII, Deep Copy & Lifetime Semantics",
        "difficulty": "hard",
        "questionCount": 15
      }
    ]
  },
  {
    "id": "dsa_unit1",
    "subjectId": "dsa",
    "title": "Unit I: Complexity Analysis, Arrays, Searching & Sorting",
    "description": "Basic Concepts & Notations, Time/Space Complexity & Trade-offs (Omega, Theta, Big O), Linear Arrays, Insertion, Deletion, Merging, Bubble, Insertion & Selection Sort, Linear & Binary Search.",
    "sets": [
      {
        "id": "dsa_u1_easy",
        "title": "Section 1: Asymptotic Notations & Array Basics",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "dsa_u1_medium",
        "title": "Section 2: Array Shifts, Binary Search & Sorting Passes",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "dsa_u1_hard",
        "title": "Section 3: Tight Bounds, Stability & Merge Trade-offs",
        "difficulty": "hard",
        "questionCount": 15
      }
    ]
  },
  {
    "id": "dsa_unit2",
    "subjectId": "dsa",
    "title": "Unit II: Linked Lists, Header Lists & Two-Way Lists",
    "description": "Memory Representation & Allocation, Traversal, Insertion, Deletion, Header Linked Lists (Grounded & Circular), Two-Way Lists (Doubly Linked Lists).",
    "sets": [
      {
        "id": "dsa_u2_easy",
        "title": "Section 1: Singly Linked List Fundamentals",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "dsa_u2_medium",
        "title": "Section 2: Deletions, Cycles & Header Lists",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "dsa_u2_hard",
        "title": "Section 3: Two-Way Lists & Memory Reorganization",
        "difficulty": "hard",
        "questionCount": 15
      }
    ]
  },
  {
    "id": "dsa_unit3",
    "subjectId": "dsa",
    "title": "Unit III: Stacks, Polish Expressions, Queues & Deques",
    "description": "Stack List & Array representations, Push/Pop/Traversal, Arithmetic expressions (Polish notation, evaluation & transformation), Queue List & Array representations, Priority Queues, Deques.",
    "sets": [
      {
        "id": "dsa_u3_easy",
        "title": "Section 1: Stack & Queue Principles (LIFO/FIFO)",
        "difficulty": "easy",
        "questionCount": 15
      },
      {
        "id": "dsa_u3_medium",
        "title": "Section 2: Expression Evaluation & Circular Queues",
        "difficulty": "medium",
        "questionCount": 15
      },
      {
        "id": "dsa_u3_hard",
        "title": "Section 3: Infix Transformations, Deques & Priority Queues",
        "difficulty": "hard",
        "questionCount": 15
      }
    ]
  }
];

export const QUIZ_QUESTIONS = [
  {
    "id": "oops_u1_easy_q1",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q2",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q3",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q4",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q5",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q6",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q7",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q8",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q9",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q10",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q11",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q12",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q13",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q14",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_easy_q15",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u1_med_q1",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q2",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q3",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q4",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q5",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q6",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q7",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q8",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q9",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q10",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q11",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q12",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q13",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q14",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_med_q15",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u1_hard_q1",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q2",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q3",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q4",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q5",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q6",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q7",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q8",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q9",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q10",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q11",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q12",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q13",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q14",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u1_hard_q15",
    "subjectId": "oops",
    "unitId": "unit1",
    "setId": "u1_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_easy_q1",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q2",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q3",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q4",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q5",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q6",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q7",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q8",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q9",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q10",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q11",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q12",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q13",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q14",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_easy_q15",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u2_med_q1",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q2",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q3",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q4",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q5",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q6",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q7",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q8",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q9",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q10",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q11",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q12",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q13",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q14",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_med_q15",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u2_hard_q1",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q2",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q3",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q4",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q5",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q6",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q7",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q8",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q9",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q10",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q11",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q12",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q13",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q14",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u2_hard_q15",
    "subjectId": "oops",
    "unitId": "unit2",
    "setId": "u2_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_easy_q1",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q2",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q3",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q4",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q5",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q6",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q7",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q8",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q9",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q10",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q11",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q12",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q13",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q14",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_easy_q15",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_easy",
    "difficulty": "easy",
    "language": "cpp",
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
    "id": "oops_u3_med_q1",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q2",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q3",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q4",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q5",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q6",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q7",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q8",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q9",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q10",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q11",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q12",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q13",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q14",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_med_q15",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_medium",
    "difficulty": "medium",
    "language": "cpp",
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
    "id": "oops_u3_hard_q1",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q2",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q3",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q4",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q5",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q6",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q7",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
  },
  {
    "id": "oops_u3_hard_q8",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q9",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q10",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q11",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q12",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q13",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q14",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "oops_u3_hard_q15",
    "subjectId": "oops",
    "unitId": "unit3",
    "setId": "u3_hard",
    "difficulty": "hard",
    "language": "cpp",
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
    "id": "dsa_u1_easy_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "Which asymptotic notation represents the mathematical tight bound (both upper and lower bound) of an algorithm's running time?",
    "code": "// f(n) = Theta(g(n)) iff c1*g(n) <= f(n) <= c2*g(n) for n >= n0",
    "options": [
      "Big O (O)",
      "Big Omega (\u03a9)",
      "Big Theta (\u0398)",
      "Little o (o)"
    ],
    "correctAnswer": 2,
    "explanation": "Big Theta (\u0398) bounds a function from above and below within constant factors, representing the exact or tight asymptotic growth rate."
  },
  {
    "id": "dsa_u1_easy_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the Big O time complexity of accessing an element in a contiguous linear array at a known index i?",
    "code": "int val = arr[i]; // Address = Base + i * sizeof(int)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0,
    "explanation": "Linear arrays store elements in contiguous memory. Using direct pointer offset calculation, any element can be accessed in O(1) constant time."
  },
  {
    "id": "dsa_u1_easy_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "Which asymptotic notation represents the formal lower bound of an algorithm's execution time?",
    "code": "T(n) >= c * g(n) for all n >= n0",
    "options": [
      "Big O Notation",
      "Big Omega (\u03a9) Notation",
      "Big Theta (\u0398) Notation",
      "Small Omega (\u03c9) Notation only"
    ],
    "correctAnswer": 1,
    "explanation": "Big Omega (\u03a9) provides an asymptotic lower bound, stating that the algorithm will take at least that much time for sufficiently large input sizes."
  },
  {
    "id": "dsa_u1_easy_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In a linear array of size N, what is the best-case time complexity of Linear Search?",
    "code": "int linearSearch(int arr[], int n, int target) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "In the best case, the target element is located at the very first index (index 0), requiring only 1 comparison, which is O(1)."
  },
  {
    "id": "dsa_u1_easy_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the primary prerequisite for executing Binary Search on an array?",
    "code": "// binary_search(arr, arr + n, target)",
    "options": [
      "The array elements must be unique with no duplicates",
      "The array elements must be sorted in ascending or descending order",
      "The array size must be an exact power of 2",
      "The array must be dynamically allocated on the heap"
    ],
    "correctAnswer": 1,
    "explanation": "Binary search divides the search interval in half based on magnitude comparisons, which strictly requires the array to be sorted."
  },
  {
    "id": "dsa_u1_easy_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the space complexity of an iterative Linear Search on an array of size N?",
    "code": "int linearSearch(int arr[], int n, int target);",
    "options": [
      "O(1) auxiliary space",
      "O(n) auxiliary space",
      "O(log n) auxiliary space",
      "O(n^2) auxiliary space"
    ],
    "correctAnswer": 0,
    "explanation": "Iterative linear search requires only a single loop index variable, using O(1) constant auxiliary space."
  },
  {
    "id": "dsa_u1_easy_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What fundamental data structure category does a standard 1D linear array belong to?",
    "code": "int numbers[100];",
    "options": [
      "Non-linear, Hierarchical Data Structure",
      "Linear, Homogeneous Contiguous Data Structure",
      "Non-linear, Cyclic Network Structure",
      "Dynamic Heterogeneous Associative Map"
    ],
    "correctAnswer": 1,
    "explanation": "A standard linear array stores elements of identical type (homogeneous) sequentially in contiguous memory locations (linear)."
  },
  {
    "id": "dsa_u1_easy_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "How many total passes are required to sort an array of N elements using standard Bubble Sort in the worst case?",
    "code": "for (int pass = 0; pass < n - 1; pass++) { ... }",
    "options": [
      "N passes",
      "N - 1 passes",
      "N / 2 passes",
      "log2(N) passes"
    ],
    "correctAnswer": 1,
    "explanation": "Bubble sort places one unsorted maximum element into its correct final position per pass, requiring at most N - 1 passes to sort N elements."
  },
  {
    "id": "dsa_u1_easy_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In Selection Sort, what operation is performed during each outer loop pass?",
    "code": "int minIdx = i;\nfor (int j = i + 1; j < n; j++) {\n    if (arr[j] < arr[minIdx]) minIdx = j;\n}\nswap(arr[i], arr[minIdx]);",
    "options": [
      "The smallest element in the unsorted subarray is identified and swapped with the first unsorted position",
      "Adjacent elements are continuously swapped until no inversions remain",
      "Elements are partitioned around a selected pivot value",
      "The array is split into two halves and recursively merged"
    ],
    "correctAnswer": 0,
    "explanation": "Selection sort scans the remaining unsorted subarray to find the minimum element and places it into the current prefix boundary via a single swap."
  },
  {
    "id": "dsa_u1_easy_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the worst-case time complexity of standard Insertion Sort?",
    "code": "for (int i = 1; i < n; i++) {\n    int key = arr[i], j = i - 1;\n    while (j >= 0 && arr[j] > key) { arr[j+1] = arr[j]; j--; }\n    arr[j+1] = key;\n}",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(log n)"
    ],
    "correctAnswer": 2,
    "explanation": "When the array is reverse-sorted, each element i must be compared and shifted past all i preceding elements, producing 1+2+...+(N-1) = O(N^2) operations."
  },
  {
    "id": "dsa_u1_easy_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In C/C++, if an array starts at base memory address 1000 and each integer occupies 4 bytes, what is the address of element arr[5]?",
    "code": "// Base Address = 1000, sizeof(int) = 4, index = 5\n// Address = Base + index * sizeof(Type)",
    "options": [
      "1005",
      "1020",
      "1016",
      "1024"
    ],
    "correctAnswer": 1,
    "explanation": "Address = Base + (index * sizeof(int)) = 1000 + (5 * 4) = 1000 + 20 = 1020."
  },
  {
    "id": "dsa_u1_easy_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the time complexity to traverse and print all elements of a linear array of size N?",
    "code": "for (int i = 0; i < n; i++) {\n    printf(\"%d \", arr[i]);\n}",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2,
    "explanation": "Array traversal visits each of the N elements exactly once, which takes O(N) linear time."
  },
  {
    "id": "dsa_u1_easy_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "Which of the following sorting algorithms has a best-case time complexity of O(n) when the array is already completely sorted?",
    "code": "// Best-case test on sorted input: [1, 2, 3, 4, 5]",
    "options": [
      "Selection Sort",
      "Insertion Sort",
      "Standard Quick Sort without median",
      "Heap Sort"
    ],
    "correctAnswer": 1,
    "explanation": "Insertion sort checks the adjacent element once; if already in order, the inner loop immediately terminates, running in O(N) time."
  },
  {
    "id": "dsa_u1_easy_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What does the concept of 'Space-Time Trade-off' refer to in algorithm analysis?",
    "code": "// Example: Using a lookup table/hash array to reduce search time from O(N) to O(1)",
    "options": [
      "Algorithms with higher time complexity always consume less memory",
      "Solving a computational problem in less time often requires consuming more memory space, and vice-versa",
      "CPU execution speed automatically doubles when memory is allocated on the stack",
      "Asymptotic notation only applies when memory exceeds 4GB"
    ],
    "correctAnswer": 1,
    "explanation": "The space-time trade-off describes the design balance where memory consumption can be increased (e.g. precomputed tables) to achieve faster execution times."
  },
  {
    "id": "dsa_u1_easy_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "If an algorithm performs exactly 5n^3 + 20n^2 + 100 operations, what is its asymptotic Big O complexity?",
    "code": "f(n) = 5n^3 + 20n^2 + 100",
    "options": [
      "O(n^2)",
      "O(5n^3)",
      "O(n^3)",
      "O(n!)"
    ],
    "correctAnswer": 2,
    "explanation": "In Big O notation, lower-order terms (20n^2 + 100) and constant multipliers (5) are dropped, leaving the dominant polynomial term O(n^3)."
  },
  {
    "id": "dsa_u1_med_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "When inserting a new element at index k into a linear array of current size N, how many elements must be shifted to the right?",
    "code": "for (int i = n - 1; i >= k; i--) {\n    arr[i + 1] = arr[i];\n}\narr[k] = newElement;",
    "options": [
      "k elements",
      "N - k elements",
      "N - k + 1 elements",
      "N elements"
    ],
    "correctAnswer": 1,
    "explanation": "Elements from index k up to index N - 1 must be moved one position to the right to make room at index k, which is exactly (N - 1) - k + 1 = N - k elements."
  },
  {
    "id": "dsa_u1_med_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "When deleting an element from index k in an array of size N, how many elements must be shifted to the left to preserve continuity?",
    "code": "for (int i = k; i < n - 1; i++) {\n    arr[i] = arr[i + 1];\n}\nn--;",
    "options": [
      "N - k - 1 elements",
      "k elements",
      "N - k elements",
      "N elements"
    ],
    "correctAnswer": 0,
    "explanation": "Elements from index k + 1 to N - 1 must be shifted left by one slot, which totals (N - 1) - (k + 1) + 1 = N - k - 1 elements."
  },
  {
    "id": "dsa_u1_med_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the maximum number of comparisons required by Binary Search on a sorted array of 64 elements in the worst case?",
    "code": "// Array size N = 64",
    "options": [
      "6",
      "7",
      "64",
      "32"
    ],
    "correctAnswer": 1,
    "explanation": "The maximum number of comparisons for binary search is floor(log2(N)) + 1. For N = 64, floor(log2(64)) + 1 = 6 + 1 = 7 comparisons."
  },
  {
    "id": "dsa_u1_med_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In 2D row-major order representation for an array arr[R][C] with base address B and element size S, what is the memory address formula for arr[i][j]?",
    "code": "// Row-major representation where rows are stored contiguously",
    "options": [
      "B + (i * C + j) * S",
      "B + (j * R + i) * S",
      "B + (i * R + j) * S",
      "B + (i + j) * C * S"
    ],
    "correctAnswer": 0,
    "explanation": "In row-major order, each row i is preceded by i complete rows of length C. Therefore, the offset is (i * C + j) elements, making the address B + (i * C + j) * S."
  },
  {
    "id": "dsa_u1_med_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In column-major order representation for a matrix arr[R][C] with base address B and element size S, what is the memory address formula for arr[i][j]?",
    "code": "// Column-major representation (used in Fortran/MATLAB)",
    "options": [
      "B + (i * C + j) * S",
      "B + (j * R + i) * S",
      "B + (i + j * C) * S",
      "B + (i * R * j) * S"
    ],
    "correctAnswer": 1,
    "explanation": "In column-major order, column elements are stored contiguously. Preceding column j has j full columns of length R, so the address is B + (j * R + i) * S."
  },
  {
    "id": "dsa_u1_med_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the recurrence relation describing the time complexity T(N) of Binary Search?",
    "code": "int mid = low + (high - low) / 2;\nif (arr[mid] == target) return mid;\nelse if (arr[mid] > target) high = mid - 1;\nelse low = mid + 1;",
    "options": [
      "T(N) = 2T(N/2) + O(1)",
      "T(N) = T(N/2) + O(1)",
      "T(N) = T(N - 1) + O(1)",
      "T(N) = 2T(N/2) + O(N)"
    ],
    "correctAnswer": 1,
    "explanation": "Binary search performs 1 comparison (O(1)) and recurses on only one half of the array (T(N/2)), yielding T(N) = T(N/2) + O(1), which solves to O(log N)."
  },
  {
    "id": "dsa_u1_med_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the time complexity of merging two sorted arrays of lengths M and N into a single combined sorted array?",
    "code": "void merge(int A[], int m, int B[], int n, int C[]) {\n    int i = 0, j = 0, k = 0;\n    while (i < m && j < n) {\n        if (A[i] <= B[j]) C[k++] = A[i++];\n        else C[k++] = B[j++];\n    }\n    while (i < m) C[k++] = A[i++];\n    while (j < n) C[k++] = B[j++];\n}",
    "options": [
      "O(M * N)",
      "O(M + N)",
      "O(max(M, N) * log(M + N))",
      "O(M log N)"
    ],
    "correctAnswer": 1,
    "explanation": "The two-pointer merge inspects each element of both arrays at most once, performing M + N operations, resulting in O(M + N) linear time."
  },
  {
    "id": "dsa_u1_med_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "How many comparisons does standard Bubble Sort make on an array of size N if no early-termination swap flag is used?",
    "code": "for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n        // comparison here\n    }\n}",
    "options": [
      "N * (N - 1) / 2",
      "N * N",
      "N * (N + 1) / 2",
      "N - 1"
    ],
    "correctAnswer": 0,
    "explanation": "Pass 1 makes N - 1 comparisons, Pass 2 makes N - 2, ..., Pass N - 1 makes 1. The sum from 1 to N - 1 is N * (N - 1) / 2."
  },
  {
    "id": "dsa_u1_med_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the maximum number of element swaps performed by Selection Sort when sorting an array of size N?",
    "code": "// Selection sort swap count analysis",
    "options": [
      "N - 1 swaps",
      "N * (N - 1) / 2 swaps",
      "N^2 swaps",
      "2N swaps"
    ],
    "correctAnswer": 0,
    "explanation": "Selection sort performs at most one swap per outer pass (after finding the minimum of the unsorted suffix). Hence, it performs at most N - 1 swaps in total."
  },
  {
    "id": "dsa_u1_med_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In the following C code snippet, what will be printed?",
    "code": "#include <stdio.h>\nint main() {\n    int arr[] = {12, 34, 54, 2, 3};\n    int *ptr = arr;\n    printf(\"%d %d\", *(ptr + 2), *(arr + 4));\n    return 0;\n}",
    "options": [
      "34 2",
      "54 3",
      "54 2",
      "12 54"
    ],
    "correctAnswer": 1,
    "explanation": "*(ptr + 2) accesses index 2, which is 54. *(arr + 4) accesses index 4, which is 3. Output is '54 3'."
  },
  {
    "id": "dsa_u1_med_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "Why is the calculation `mid = low + (high - low) / 2` preferred over `mid = (low + high) / 2` in Binary Search?",
    "code": "int mid = low + (high - low) / 2;",
    "options": [
      "It executes faster on modern CPU floating-point units",
      "It prevents potential 32-bit signed integer arithmetic overflow when low + high exceeds 2,147,483,647",
      "It automatically rounds up instead of rounding down",
      "It allows searching negative numbers which (low + high)/2 does not"
    ],
    "correctAnswer": 1,
    "explanation": "When low + high exceeds INT_MAX (approx 2^31 - 1), the sum overflows into a negative integer, causing out-of-bounds array access. Using low + (high - low)/2 avoids overflow."
  },
  {
    "id": "dsa_u1_med_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "An array contains [5, 1, 4, 2, 8]. What is the contents of the array after the first complete pass of Bubble Sort (ascending)?",
    "code": "int arr[] = {5, 1, 4, 2, 8};\n// After 1st outer pass of bubble sort:",
    "options": [
      "[1, 4, 2, 5, 8]",
      "[1, 5, 4, 2, 8]",
      "[1, 2, 4, 5, 8]",
      "[5, 1, 2, 4, 8]"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: (5,1)->(1,5); Step 2: (5,4)->(4,5); Step 3: (5,2)->(2,5); Step 4: (5,8)->no swap. Result is [1, 4, 2, 5, 8]."
  },
  {
    "id": "dsa_u1_med_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the primary advantage of Insertion Sort over Selection Sort and Bubble Sort on nearly-sorted data?",
    "code": "// Array: [1, 2, 3, 5, 4]",
    "options": [
      "Insertion sort operates in O(1) auxiliary space while the others require O(N)",
      "Insertion sort exhibits adaptive behavior, terminating inner loops early and running in near O(N) time",
      "Insertion sort performs fewer total comparisons on reverse-sorted data",
      "Insertion sort uses binary subdivision"
    ],
    "correctAnswer": 1,
    "explanation": "Insertion sort is adaptive: when elements are already in sorted order or have few inversions, the while condition fails immediately, yielding O(N + d) time where d is the inversion count."
  },
  {
    "id": "dsa_u1_med_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "Given two sorted arrays A = [1, 5, 8] and B = [2, 3, 9], what is the sequence of elements placed into merged array C?",
    "code": "// Merge A and B into C in ascending order",
    "options": [
      "[1, 2, 3, 5, 8, 9]",
      "[1, 5, 8, 2, 3, 9]",
      "[1, 2, 5, 3, 8, 9]",
      "[9, 8, 5, 3, 2, 1]"
    ],
    "correctAnswer": 0,
    "explanation": "Comparing minimum elements: 1 < 2 -> 1; 2 < 5 -> 2; 3 < 5 -> 3; 5 < 9 -> 5; 8 < 9 -> 8; remaining 9 -> 9. Result: [1, 2, 3, 5, 8, 9]."
  },
  {
    "id": "dsa_u1_med_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "Which asymptotic growth order correctly arranges standard complexities from slowest-growing to fastest-growing?",
    "code": "// Growth ranking",
    "options": [
      "O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)",
      "O(1) < O(n) < O(log n) < O(n log n) < O(n^2) < O(2^n)",
      "O(log n) < O(1) < O(n) < O(n^2) < O(n log n) < O(2^n)",
      "O(1) < O(log n) < O(n log n) < O(n) < O(n^2) < O(n!)"
    ],
    "correctAnswer": 0,
    "explanation": "The standard hierarchy of complexity growth is constant O(1) < logarithmic O(log n) < linear O(n) < linearithmic O(n log n) < quadratic O(n^2) < exponential O(2^n)."
  },
  {
    "id": "dsa_u1_hard_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the formal mathematical condition for f(n) = Big-Omega(g(n))?",
    "code": "// Asymptotic lower bound definition",
    "options": [
      "There exist positive constants c and n0 such that 0 <= c * g(n) <= f(n) for all n >= n0",
      "There exist positive constants c and n0 such that 0 <= f(n) <= c * g(n) for all n >= n0",
      "lim (n -> inf) f(n) / g(n) = 0",
      "f(n) <= g(n) for all integers n >= 1"
    ],
    "correctAnswer": 0,
    "explanation": "f(n) = \u03a9(g(n)) defines a lower bound: there exist positive constants c and n0 such that c * g(n) <= f(n) for all n >= n0."
  },
  {
    "id": "dsa_u1_hard_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Which of the following sorting algorithms is UNSTABLE by default?",
    "code": "// Stability test: identical keys must retain original relative ordering",
    "options": [
      "Bubble Sort",
      "Insertion Sort",
      "Selection Sort",
      "Merge Sort"
    ],
    "correctAnswer": 2,
    "explanation": "Selection sort is unstable because long-distance swapping can move an element past an identical key (e.g. in [2a, 2b, 1], 2a is swapped with 1, placing 2a after 2b)."
  },
  {
    "id": "dsa_u1_hard_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In a 2D array defined as float A[10][20] in C (0-indexed, row-major), where each float is 4 bytes and base address is 2000, what is the address of A[7][15]?",
    "code": "// Rows = 10, Cols = 20, Base = 2000, Size = 4 bytes\n// Index = A[7][15]",
    "options": [
      "2620",
      "2600",
      "2580",
      "2720"
    ],
    "correctAnswer": 0,
    "explanation": "Offset = (i * cols + j) = (7 * 20 + 15) = 140 + 15 = 155 elements. Address = 2000 + (155 * 4) = 2000 + 620 = 2620."
  },
  {
    "id": "dsa_u1_hard_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the total number of comparisons performed by Selection Sort on an already sorted array of size N?",
    "code": "int arr[] = {1, 2, 3, 4, 5}; // Already sorted",
    "options": [
      "N - 1",
      "0",
      "N * (N - 1) / 2",
      "log2(N)"
    ],
    "correctAnswer": 2,
    "explanation": "Selection sort is NOT adaptive: it always scans the entire remaining unsorted subarray to confirm the minimum, performing N*(N-1)/2 comparisons regardless of initial order."
  },
  {
    "id": "dsa_u1_hard_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Using Master Theorem on T(N) = 2T(N/2) + O(1), what is the tight asymptotic bound?",
    "code": "// T(N) = 2T(N/2) + O(1)\n// a = 2, b = 2, f(N) = O(N^0)",
    "options": [
      "Theta(1)",
      "Theta(log N)",
      "Theta(N)",
      "Theta(N log N)"
    ],
    "correctAnswer": 2,
    "explanation": "Here a = 2, b = 2, log_b(a) = log_2(2) = 1. Since f(N) = O(N^0) and 0 < 1, Case 1 of the Master Theorem applies: T(N) = \u0398(N^(log_b(a))) = \u0398(N)."
  },
  {
    "id": "dsa_u1_hard_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the minimum number of inversions in an array of size N, and what array configuration produces it?",
    "code": "// Inversion: pair (i, j) such that i < j and arr[i] > arr[j]",
    "options": [
      "0 inversions; produced when the array is already sorted in non-decreasing order",
      "N - 1 inversions; produced when the array elements are distinct",
      "1 inversion; produced when only two elements are swapped",
      "N * (N - 1) / 2 inversions; produced when the array is sorted"
    ],
    "correctAnswer": 0,
    "explanation": "When an array is sorted in ascending order, no pair satisfies arr[i] > arr[j] for i < j, resulting in exactly 0 inversions."
  },
  {
    "id": "dsa_u1_hard_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the maximum possible number of inversions in an array of N distinct elements?",
    "code": "// Reverse sorted array: [5, 4, 3, 2, 1]",
    "options": [
      "N",
      "N - 1",
      "N * (N - 1) / 2",
      "2^N"
    ],
    "correctAnswer": 2,
    "explanation": "In a completely reverse-sorted array, every pair (i, j) with i < j forms an inversion. The total number of pairs is N choose 2 = N * (N - 1) / 2."
  },
  {
    "id": "dsa_u1_hard_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Which statement about Bubble Sort with an early-exit 'swapped' flag is TRUE?",
    "code": "bool swapped = false;\nfor (int j = 0; j < n - i - 1; j++) {\n    if (arr[j] > arr[j+1]) { swap(...); swapped = true; }\n}\nif (!swapped) break;",
    "options": [
      "Worst-case time complexity becomes O(N log N)",
      "Best-case time complexity improves to O(N) comparisons and O(1) swaps",
      "It changes Bubble Sort from stable to unstable",
      "Space complexity increases from O(1) to O(N)"
    ],
    "correctAnswer": 1,
    "explanation": "If no elements are swapped during the first pass (meaning array is already sorted), the flag remains false and the loop terminates, yielding O(N) best-case time."
  },
  {
    "id": "dsa_u1_hard_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Consider the following C function. What is its time complexity in terms of N?",
    "code": "void mystery(int n) {\n    int count = 0;\n    for (int i = 1; i <= n; i *= 2) {\n        for (int j = 1; j <= i; j++) {\n            count++;\n        }\n    }\n}",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n^2)"
    ],
    "correctAnswer": 1,
    "explanation": "The outer loop runs for i = 1, 2, 4, 8, ..., 2^k <= n. The inner loop executes i times. Total operations = 1 + 2 + 4 + ... + 2^k = 2^(k+1) - 1 <= 2n - 1 = O(n)."
  },
  {
    "id": "dsa_u1_hard_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In 3D array memory layout A[D1][D2][D3] (row-major), what is the formula for the linear offset of element A[i][j][k]?",
    "code": "// 3D array dimension D1 x D2 x D3",
    "options": [
      "(i * D2 * D3) + (j * D3) + k",
      "(i * D1) + (j * D2) + k",
      "(k * D1 * D2) + (j * D1) + i",
      "(i + j + k) * D3"
    ],
    "correctAnswer": 0,
    "explanation": "In 3D row-major layout, each slice i contains D2 * D3 elements, each row j within that slice contains D3 elements, and k is the column offset: (i * D2 * D3) + (j * D3) + k."
  },
  {
    "id": "dsa_u1_hard_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "If f(n) = 3n^2 + 5n and g(n) = n^2, which of the following asymptotic relations is FALSE?",
    "code": "f(n) = 3n^2 + 5n, g(n) = n^2",
    "options": [
      "f(n) = O(g(n))",
      "f(n) = Omega(g(n))",
      "f(n) = Theta(g(n))",
      "f(n) = o(g(n)) (Little-o)"
    ],
    "correctAnswer": 3,
    "explanation": "Little-o requires lim (n->inf) f(n)/g(n) = 0. Here lim (3n^2+5n)/n^2 = 3 != 0. Therefore f(n) is NOT little-o of g(n)."
  },
  {
    "id": "dsa_u1_hard_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the optimal algorithm and time complexity to find if there exist two numbers in a sorted array of size N that add up to a target sum S?",
    "code": "int arr[] = {2, 7, 11, 15}; int target = 9;",
    "options": [
      "Two-pointer technique from both ends in O(N) time and O(1) auxiliary space",
      "Binary search for each element in O(N^2) time",
      "Nested loop checking all pairs in O(N^2) time and O(N) space",
      "Sorting again in O(N log N) space"
    ],
    "correctAnswer": 0,
    "explanation": "Place pointers at left = 0 and right = N - 1. If arr[left] + arr[right] == target return true; if sum < target left++; else right--. This takes O(N) time and O(1) space."
  },
  {
    "id": "dsa_u1_hard_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Why does cache locality give linear arrays a major practical runtime advantage over linked data structures during traversal?",
    "code": "// Hardware CPU Cache lines (typically 64 bytes)",
    "options": [
      "Contiguous memory layout triggers hardware prefetching of contiguous cache lines, minimizing cache misses",
      "Arrays do not use RAM memory and run entirely in CPU registers",
      "Linked lists cannot be indexed with integer variables",
      "Arrays prevent context switching by the operating system kernel"
    ],
    "correctAnswer": 0,
    "explanation": "Sequential memory addresses allow CPU spatial prefetching to load subsequent array elements into L1/L2 cache before they are requested, avoiding high-latency RAM lookups."
  },
  {
    "id": "dsa_u1_hard_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the worst-case number of passes and swaps to sort an array of N identical elements [7, 7, 7, ..., 7] using optimized Bubble Sort?",
    "code": "int arr[] = {7, 7, 7, 7, 7};",
    "options": [
      "1 pass, 0 swaps",
      "N - 1 passes, 0 swaps",
      "N passes, N swaps",
      "log2(N) passes, 0 swaps"
    ],
    "correctAnswer": 0,
    "explanation": "In the very first pass, no adjacent element is strictly greater than its neighbor, so 0 swaps occur. The swapped flag remains false, terminating after exactly 1 pass."
  },
  {
    "id": "dsa_u1_hard_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit1",
    "setId": "dsa_u1_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Given an array of size N, if we wish to merge two already sorted subarrays arr[0..mid] and arr[mid+1..N-1] into an auxiliary array, what is the required auxiliary space?",
    "code": "void merge(int arr[], int l, int m, int r);",
    "options": [
      "O(N) auxiliary space",
      "O(1) auxiliary space",
      "O(log N) auxiliary space",
      "O(N^2) auxiliary space"
    ],
    "correctAnswer": 0,
    "explanation": "Standard linear merge copies the elements into a temporary buffer of size N before writing back, requiring O(N) auxiliary memory."
  },
  {
    "id": "dsa_u2_easy_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What are the two essential components of a standard Singly Linked List node?",
    "code": "struct Node {\n    int data;\n    struct Node* next;\n};",
    "options": [
      "Data field and a pointer to the next node",
      "Data field and a pointer to the previous node",
      "Two data fields and an integer array",
      "A pointer to the parent and a pointer to the child"
    ],
    "correctAnswer": 0,
    "explanation": "A singly linked list node contains a data payload and a pointer (reference) holding the memory address of the succeeding node."
  },
  {
    "id": "dsa_u2_easy_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What value does the 'next' pointer of the terminal (last) node hold in a standard non-circular singly linked list?",
    "code": "Node* tail = ...; // What does tail->next point to?",
    "options": [
      "Head pointer",
      "NULL (or nullptr)",
      "Base address of memory",
      "Self pointer"
    ],
    "correctAnswer": 1,
    "explanation": "In a linear grounded singly linked list, the final node's next pointer is set to NULL to designate the end of the list."
  },
  {
    "id": "dsa_u2_easy_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the time complexity to insert a new node at the very beginning (head) of a singly linked list?",
    "code": "newNode->next = head;\nhead = newNode;",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctAnswer": 0,
    "explanation": "Inserting at the head requires only two pointer updates (newNode->next = head and head = newNode), executing in constant O(1) time."
  },
  {
    "id": "dsa_u2_easy_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In C, which standard library function is used to dynamically allocate memory on the heap for a new linked list node?",
    "code": "struct Node* newNode = (struct Node*)_____(sizeof(struct Node));",
    "options": [
      "malloc()",
      "alloc()",
      "new()",
      "create()"
    ],
    "correctAnswer": 0,
    "explanation": "In C, malloc() dynamically allocates a block of memory of specified byte size on the heap and returns a void pointer."
  },
  {
    "id": "dsa_u2_easy_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the time complexity to traverse and print all elements of a singly linked list of size N?",
    "code": "Node* curr = head;\nwhile (curr != NULL) {\n    printf(\"%d \", curr->data);\n    curr = curr->next;\n}",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2,
    "explanation": "Traversing visits each node from head to tail sequentially by following pointers, taking O(N) linear time."
  },
  {
    "id": "dsa_u2_easy_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the key advantage of a Linked List over a contiguous fixed-size Array?",
    "code": "// Dynamic node creation at runtime",
    "options": [
      "Linked lists allow random access to any element in O(1) time",
      "Linked lists have dynamic size and can grow or shrink without requiring memory reallocation or copying",
      "Linked lists consume less memory per element than arrays",
      "Linked lists benefit from hardware cache spatial prefetching"
    ],
    "correctAnswer": 1,
    "explanation": "Linked lists allocate individual nodes dynamically on demand, growing or shrinking gracefully without needing fixed capacity limits or expensive reallocations."
  },
  {
    "id": "dsa_u2_easy_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What condition verifies that a singly linked list is empty?",
    "code": "struct Node* head;",
    "options": [
      "head == NULL",
      "head->next == NULL",
      "head->data == 0",
      "head == 1"
    ],
    "correctAnswer": 0,
    "explanation": "An empty linked list is identified by a head pointer that does not point to any node (head == NULL)."
  },
  {
    "id": "dsa_u2_easy_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the memory overhead of a linked list compared to a standard linear array of the same data type?",
    "code": "struct Node { int data; struct Node* next; };",
    "options": [
      "Zero additional memory",
      "Each node requires extra memory to store pointer(s) (e.g. 4 or 8 bytes per node for 'next')",
      "Arrays consume 2x more memory than linked lists",
      "Linked lists only store data in CPU registers"
    ],
    "correctAnswer": 1,
    "explanation": "Each node in a linked list must store one or two pointer fields in addition to its payload, consuming extra memory (e.g. 8 bytes on 64-bit systems per pointer)."
  },
  {
    "id": "dsa_u2_easy_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "How do you access the data field of the second node in a singly linked list with a valid head pointer?",
    "code": "Node* head = ...;",
    "options": [
      "head->data",
      "head->next->data",
      "head[1]->data",
      "head->prev->data"
    ],
    "correctAnswer": 1,
    "explanation": "head points to the 1st node, head->next points to the 2nd node, and head->next->data accesses its data payload."
  },
  {
    "id": "dsa_u2_easy_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In C++, what operator is used to allocate and construct a new linked list node on the heap?",
    "code": "Node* node = _____ Node(42);",
    "options": [
      "malloc",
      "new",
      "create",
      "alloc"
    ],
    "correctAnswer": 1,
    "explanation": "C++ uses the new operator, which allocates memory and invokes constructors automatically."
  },
  {
    "id": "dsa_u2_easy_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is a 'Two-Way List' commonly known as in Data Structures?",
    "code": "struct Node { int data; struct Node* prev; struct Node* next; };",
    "options": [
      "Binary Tree",
      "Doubly Linked List",
      "Circular Queue",
      "Hash Table"
    ],
    "correctAnswer": 1,
    "explanation": "A two-way list contains pointers to both the previous node and the next node, which is the definition of a Doubly Linked List."
  },
  {
    "id": "dsa_u2_easy_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In a Doubly Linked List node, what do the two pointer fields reference?",
    "code": "struct Node* prev; struct Node* next;",
    "options": [
      "Both point to the head node",
      "'prev' points to the preceding node, and 'next' points to the succeeding node",
      "One points to data, one points to parent",
      "Both point to NULL"
    ],
    "correctAnswer": 1,
    "explanation": "In a doubly linked list, prev links to the predecessor node, and next links to the successor node."
  },
  {
    "id": "dsa_u2_easy_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What happens if a program allocates nodes with malloc() or new but never frees them before overwriting the head pointer?",
    "code": "head = NULL; // Previous nodes are still in heap!",
    "options": [
      "Memory Leak",
      "Segmentation Fault immediately",
      "Stack Overflow",
      "CPU Throttling"
    ],
    "correctAnswer": 0,
    "explanation": "Losing the only pointer to dynamically allocated heap memory prevents deallocation, causing orphaned memory known as a Memory Leak."
  },
  {
    "id": "dsa_u2_easy_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the time complexity to search for an element by value in an unsorted singly linked list of size N?",
    "code": "Node* find(Node* head, int target);",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2,
    "explanation": "Finding an element in an unsorted linked list requires sequential traversal from head to tail, resulting in O(N) worst-case time."
  },
  {
    "id": "dsa_u2_easy_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In C, which function must be called on each node pointer to safely release its heap memory?",
    "code": "free(curr);",
    "options": [
      "delete()",
      "free()",
      "release()",
      "dispose()"
    ],
    "correctAnswer": 1,
    "explanation": "In C, memory allocated with malloc() must be released back to the heap manager using free()."
  },
  {
    "id": "dsa_u2_med_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the time complexity to append a new node to the end of a singly linked list if ONLY the 'head' pointer is maintained?",
    "code": "Node* curr = head;\nwhile (curr->next != NULL) curr = curr->next;\ncurr->next = newNode;",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctAnswer": 1,
    "explanation": "Without a tail pointer, the program must traverse all N nodes from head to end to locate the last node, taking O(N) time."
  },
  {
    "id": "dsa_u2_med_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "How does maintaining an explicit 'tail' pointer improve the time complexity of appending a node to the end of a linked list?",
    "code": "tail->next = newNode;\ntail = newNode;",
    "options": [
      "Reduces append time from O(n) to O(1)",
      "Reduces traversal time from O(n) to O(log n)",
      "Reduces deletion time from O(n) to O(1)",
      "No improvement"
    ],
    "correctAnswer": 0,
    "explanation": "With a tail pointer, the last node is directly accessible, allowing O(1) constant time insertion at the end."
  },
  {
    "id": "dsa_u2_med_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In a Circular Singly Linked List, what does the 'next' pointer of the last node point to?",
    "code": "tail->next = head; // Circular loop",
    "options": [
      "NULL",
      "The Head node",
      "Itself only",
      "The previous node"
    ],
    "correctAnswer": 1,
    "explanation": "In a circular linked list, the last node's next pointer wraps around to point back to the first (head) node."
  },
  {
    "id": "dsa_u2_med_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the loop termination condition when traversing a Circular Singly Linked List starting from 'head'?",
    "code": "Node* curr = head;\ndo {\n    printf(\"%d \", curr->data);\n    curr = curr->next;\n} while (_______);",
    "options": [
      "curr != NULL",
      "curr != head",
      "curr->next != NULL",
      "curr == NULL"
    ],
    "correctAnswer": 1,
    "explanation": "A circular list has no NULL pointer. Traversal completes one full cycle when curr returns back to the starting head node (curr != head)."
  },
  {
    "id": "dsa_u2_med_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is a 'Grounded Header Linked List'?",
    "code": "HeaderNode -> Node1 -> Node2 -> ... -> NodeN -> NULL",
    "options": [
      "A linked list whose last node points back to the header node",
      "A linked list containing a dedicated header node at the beginning whose last data node points to NULL",
      "A linked list stored on physical magnetic ground tapes",
      "A doubly linked list without data fields"
    ],
    "correctAnswer": 1,
    "explanation": "A grounded header linked list has a permanent header node at the start, and the last data node's next pointer terminates with NULL (grounded)."
  },
  {
    "id": "dsa_u2_med_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is a major algorithmic advantage of using a Header Linked List?",
    "code": "// Inserting at first data position does not change the header address",
    "options": [
      "Eliminates special boundary condition cases for inserting or deleting the first data element",
      "Reduces memory consumption to zero bytes per node",
      "Enables O(1) search for any value",
      "Converts the list into a balanced binary search tree"
    ],
    "correctAnswer": 0,
    "explanation": "Because the header node is permanent and always precedes the data nodes, inserting or deleting at the first position never alters the list's root pointer, removing null-head edge cases."
  },
  {
    "id": "dsa_u2_med_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What useful metadata is commonly stored inside the data field of a Header Node in a header linked list?",
    "code": "struct HeaderNode {\n    int count; // Total nodes\n    struct Node* next;\n};",
    "options": [
      "Total count of data nodes or aggregate summary (like running sum)",
      "The binary machine code of the compiler",
      "The entire operating system routing table",
      "The reverse pointer to the disk drive"
    ],
    "correctAnswer": 0,
    "explanation": "Header nodes frequently store metadata about the list, such as the total element count, maximum value, or running sum, allowing O(1) size queries."
  },
  {
    "id": "dsa_u2_med_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the correct sequence of pointer assignments to delete the node following 'prevNode' in a singly linked list?",
    "code": "Node* target = prevNode->next;\n// Complete the deletion safely:",
    "options": [
      "prevNode->next = target->next; free(target);",
      "free(target); prevNode->next = target->next;",
      "prevNode = target->next; free(target);",
      "target->next = prevNode; free(target);"
    ],
    "correctAnswer": 0,
    "explanation": "prevNode->next must be bypassed to target->next BEFORE target is freed. Freeing target first results in undefined behavior (use-after-free)."
  },
  {
    "id": "dsa_u2_med_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In a Doubly Linked List, what does head->prev point to if the list is NOT circular?",
    "code": "Node* head = ...;",
    "options": [
      "NULL",
      "head",
      "tail",
      "Undefined stack memory"
    ],
    "correctAnswer": 0,
    "explanation": "In a standard linear doubly linked list, the head node has no predecessor, so head->prev is NULL."
  },
  {
    "id": "dsa_u2_med_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "To delete a node 'curr' in a Doubly Linked List (assuming it is an interior node), which pointer updates are needed?",
    "code": "// curr has valid prev and next nodes",
    "options": [
      "curr->prev->next = curr->next; curr->next->prev = curr->prev; free(curr);",
      "curr->next = curr->prev; free(curr);",
      "curr->prev = curr->next; free(curr);",
      "head = curr->next; free(curr);"
    ],
    "correctAnswer": 0,
    "explanation": "Bypass curr in both directions: curr's predecessor's next pointer points to curr's successor, and curr's successor's prev pointer points to curr's predecessor."
  },
  {
    "id": "dsa_u2_med_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the output of the following C code demonstrating linked list traversal?",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node { int d; struct Node* next; };\nint main() {\n    struct Node a = {10, NULL}, b = {20, NULL}, c = {30, NULL};\n    a.next = &b; b.next = &c;\n    struct Node* p = &a;\n    while (p) { printf(\"%d \", p->d); p = p->next; }\n    return 0;\n}",
    "options": [
      "10 20 30 ",
      "30 20 10 ",
      "10 30 ",
      "Segmentation Fault"
    ],
    "correctAnswer": 0,
    "explanation": "p starts at a (prints 10), moves to b (prints 20), moves to c (prints 30), then becomes NULL and the loop terminates."
  },
  {
    "id": "dsa_u2_med_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In a Two-Way (Doubly) Linked List, how do you traverse the list in reverse order from the tail?",
    "code": "Node* curr = tail;\nwhile (curr != NULL) {\n    printf(\"%d \", curr->data);\n    curr = _______;\n}",
    "options": [
      "curr->prev",
      "curr->next",
      "curr--",
      "curr->next->prev"
    ],
    "correctAnswer": 0,
    "explanation": "In a doubly linked list, moving to curr->prev steps backward toward the head until curr reaches NULL."
  },
  {
    "id": "dsa_u2_med_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is a 'Circular Two-Way List' (Circular Doubly Linked List)?",
    "code": "// Both directions form complete closed loops",
    "options": [
      "head->prev points to tail, and tail->next points to head",
      "head->prev points to NULL, and tail->next points to head",
      "All nodes point to a central tree node",
      "A list containing two heads and zero tails"
    ],
    "correctAnswer": 0,
    "explanation": "In a circular doubly linked list, the first node's prev pointer points to the tail node, and the last node's next pointer points to the head node."
  },
  {
    "id": "dsa_u2_med_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the time complexity to insert an element after a given node pointer 'p' in a Doubly Linked List?",
    "code": "void insertAfter(Node* p, int val);",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctAnswer": 0,
    "explanation": "Since the target node p is already given, updating p's and p->next's pointers requires a fixed number of operations (constant O(1) time)."
  },
  {
    "id": "dsa_u2_med_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What will happen if we execute `free(head); head = head->next;`?",
    "code": "free(head);\nhead = head->next; // Hazard!",
    "options": [
      "Undefined behavior: Dereferencing memory after it has been freed (Use-After-Free)",
      "Safe deallocation of head node",
      "The entire list is cleared cleanly",
      "Compile-time error"
    ],
    "correctAnswer": 0,
    "explanation": "Once free(head) executes, the memory block is released. Accessing head->next reads deallocated memory, which is an illegal Use-After-Free bug."
  },
  {
    "id": "dsa_u2_hard_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Which code snippet correctly reverses a Singly Linked List in-place using three pointers?",
    "code": "// Reversal: prev, curr, next",
    "options": [
      "while (curr) { next = curr->next; curr->next = prev; prev = curr; curr = next; } head = prev;",
      "while (curr) { curr->next = prev; prev = curr; curr = curr->next; }",
      "while (curr) { prev = curr; curr = curr->next; curr->next = prev; }",
      "while (curr) { next = curr->next; curr = next; prev = curr; }"
    ],
    "correctAnswer": 0,
    "explanation": "Save next node (next = curr->next), reverse current link (curr->next = prev), advance prev (prev = curr), advance curr (curr = next). Finally head = prev."
  },
  {
    "id": "dsa_u2_hard_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In a Doubly Linked List, what is the exact sequence to insert newNode BETWEEN nodeA and nodeB (where nodeA->next == nodeB)?",
    "code": "// Insert newNode between nodeA and nodeB",
    "options": [
      "newNode->next = nodeB; newNode->prev = nodeA; nodeA->next = newNode; nodeB->prev = newNode;",
      "nodeA->next = newNode; nodeB->prev = newNode; newNode->next = nodeB; newNode->prev = nodeA;",
      "newNode->next = nodeA; newNode->prev = nodeB; nodeA->prev = newNode;",
      "nodeB->prev = nodeA; nodeA->next = nodeB; free(newNode);"
    ],
    "correctAnswer": 0,
    "explanation": "First bind newNode's outgoing links (next = nodeB, prev = nodeA), then redirect the existing nodes' links to newNode (nodeA->next = newNode, nodeB->prev = newNode)."
  },
  {
    "id": "dsa_u2_hard_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is Floyd's Cycle Detection Algorithm ('Tortoise and Hare') for detecting a loop in a linked list?",
    "code": "Node *slow = head, *fast = head;\nwhile (fast && fast->next) {\n    slow = slow->next;\n    fast = fast->next->next;\n    if (slow == fast) return true; // Cycle detected!\n}\nreturn false;",
    "options": [
      "Uses two pointers moving at speeds 1 and 2; if a cycle exists, they must collide in O(n) time and O(1) auxiliary space",
      "Stores all visited node addresses in a dynamic array of size O(n^2)",
      "Reverses the list to see if the head pointer is reached again",
      "Only works if all data values are distinct integers"
    ],
    "correctAnswer": 0,
    "explanation": "Slow moves 1 step while fast moves 2 steps. Inside a loop of length C, the distance between them reduces by 1 each step, guaranteeing collision in O(N) time with O(1) memory."
  },
  {
    "id": "dsa_u2_hard_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "When deleting a node given ONLY a pointer to that node 'delNode' (not the tail node) in a Singly Linked List, how can it be achieved in O(1) time?",
    "code": "void deleteNodeWithoutHead(Node* delNode);",
    "options": [
      "Copy data from delNode->next into delNode, and bypass delNode->next (delNode->next = delNode->next->next)",
      "Traverse backward using delNode->prev",
      "It is mathematically impossible to delete in O(1) time",
      "Set delNode->data = 0 and leave it in the list"
    ],
    "correctAnswer": 0,
    "explanation": "By copying delNode->next->data into delNode and deleting delNode->next, the target node's value is removed in O(1) time without knowing head."
  },
  {
    "id": "dsa_u2_hard_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What happens when you delete the ONLY remaining node in a Circular Singly Linked List?",
    "code": "if (head->next == head) {\n    free(head);\n    head = _____;\n}",
    "options": [
      "NULL",
      "head",
      "tail",
      "malloc(sizeof(Node))"
    ],
    "correctAnswer": 0,
    "explanation": "If head->next == head, the list has exactly 1 node. After freeing head, head must be reset to NULL to represent an empty list."
  },
  {
    "id": "dsa_u2_hard_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the time complexity to find the K-th element from the end of a singly linked list in a single pass?",
    "code": "// Two-pointer technique with lead of K nodes",
    "options": [
      "O(n) time, O(1) auxiliary space",
      "O(n^2) time, O(1) space",
      "O(n) time, O(n) space",
      "O(log n) time, O(1) space"
    ],
    "correctAnswer": 0,
    "explanation": "Advance a fast pointer by K steps first. Then move slow and fast together until fast reaches NULL. Slow will point to the K-th node from the end in O(N) time and O(1) space."
  },
  {
    "id": "dsa_u2_hard_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In a Doubly Linked List, what is the consequence of forgetting to update nodeB->prev when inserting newNode between nodeA and nodeB?",
    "code": "newNode->next = nodeB;\nnewNode->prev = nodeA;\nnodeA->next = newNode;\n// Missing: nodeB->prev = newNode;",
    "options": [
      "Forward traversal from head includes newNode, but backward traversal from tail skips newNode",
      "Forward traversal crashes immediately",
      "The list automatically converts into a binary tree",
      "Compile error: Prev pointer cannot be omitted"
    ],
    "correctAnswer": 0,
    "explanation": "Forward traversal follows nodeA->next (which points to newNode), but backward traversal follows nodeB->prev (which still points to nodeA), skipping newNode and corrupting bidirectional symmetry."
  },
  {
    "id": "dsa_u2_hard_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the time complexity to merge two sorted singly linked lists of lengths M and N into a single sorted list without allocating any new nodes?",
    "code": "Node* mergeSortedLists(Node* l1, Node* l2);",
    "options": [
      "O(M + N) time and O(1) auxiliary space",
      "O(M * N) time and O(1) space",
      "O(M + N) time and O(M + N) space",
      "O(log(M+N)) time"
    ],
    "correctAnswer": 0,
    "explanation": "By simply splicing the existing node pointers of l1 and l2, the merge runs in linear O(M + N) time using O(1) auxiliary space."
  },
  {
    "id": "dsa_u2_hard_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "How do you check if a Doubly Linked List is a palindrome in O(N) time and O(1) auxiliary space?",
    "code": "bool isPalindrome(Node* head, Node* tail);",
    "options": [
      "Compare head->data with tail->data, advance head = head->next, retreat tail = tail->prev until pointers meet or cross",
      "Convert the doubly linked list into an array of size O(N^2)",
      "Reverse the first half on disk and compare strings",
      "Doubly linked lists cannot be checked for palindromes"
    ],
    "correctAnswer": 0,
    "explanation": "Using bidirectional pointers from head (moving forward) and tail (moving backward), compare data values until left == right or left->prev == right in O(N) time."
  },
  {
    "id": "dsa_u2_hard_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In a circular doubly linked list with a single node, what are the values of node->next and node->prev?",
    "code": "struct Node* node = ...;",
    "options": [
      "Both node->next and node->prev point to node itself",
      "Both point to NULL",
      "node->next points to node, but node->prev points to NULL",
      "node->prev points to node, but node->next points to NULL"
    ],
    "correctAnswer": 0,
    "explanation": "In a circular doubly linked list with 1 node, both forward and backward cycles loop back to itself: node->next = node and node->prev = node."
  },
  {
    "id": "dsa_u2_hard_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Consider the following recursive function on a linked list. What does it do?",
    "code": "void printReverse(Node* head) {\n    if (head == NULL) return;\n    printReverse(head->next);\n    printf(\"%d \", head->data);\n}",
    "options": [
      "Prints the linked list elements in reverse order using the runtime call stack",
      "Reverses the actual pointer links in the list",
      "Causes an infinite loop on any input",
      "Prints elements in normal forward order"
    ],
    "correctAnswer": 0,
    "explanation": "The function recurses to the end of the list first. As the recursion unwinds, printf executes in reverse order (tail to head)."
  },
  {
    "id": "dsa_u2_hard_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the primary memory hazard when deleting an entire singly linked list with `while(curr) { free(curr); curr = curr->next; }`?",
    "code": "while (curr != NULL) {\n    free(curr);\n    curr = curr->next; // Bug!\n}",
    "options": [
      "Accessing curr->next after freeing curr results in undefined behavior (Use-After-Free)",
      "Memory leak of the tail node",
      "Stack overflow due to recursion",
      "The loop only deletes the head node"
    ],
    "correctAnswer": 0,
    "explanation": "Once free(curr) executes, reading curr->next is a Use-After-Free read. The correct pattern stores `Node* nextNode = curr->next; free(curr); curr = nextNode;`."
  },
  {
    "id": "dsa_u2_hard_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the time complexity to find the middle element of a singly linked list in a single pass?",
    "code": "Node *slow = head, *fast = head;\nwhile (fast && fast->next) {\n    slow = slow->next;\n    fast = fast->next->next;\n}\n// slow points to middle node",
    "options": [
      "O(n) time, O(1) auxiliary space",
      "O(n^2) time, O(1) space",
      "O(log n) time",
      "O(n) space"
    ],
    "correctAnswer": 0,
    "explanation": "The fast pointer moves twice as fast as slow. When fast reaches the end, slow is at the midpoint, visiting nodes in a single O(N) pass."
  },
  {
    "id": "dsa_u2_hard_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In a Grounded Circular Header List, if the list is empty, what does header->next point to?",
    "code": "// Circular Header List with zero data nodes",
    "options": [
      "Points back to the header node itself (header->next == header)",
      "Points to NULL",
      "Points to garbage memory",
      "Points to 0x1"
    ],
    "correctAnswer": 0,
    "explanation": "In a circular header list, an empty list consists of the header node pointing back to itself (header->next == header)."
  },
  {
    "id": "dsa_u2_hard_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit2",
    "setId": "dsa_u2_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "How many total pointer assignments are required to delete a node in a Doubly Linked List without auxiliary heads?",
    "code": "// del->prev->next = del->next; del->next->prev = del->prev;",
    "options": [
      "2 pointer assignments",
      "4 pointer assignments",
      "1 pointer assignment",
      "N pointer assignments"
    ],
    "correctAnswer": 0,
    "explanation": "Deleting an interior doubly linked list node requires exactly 2 pointer assignments: one for the predecessor's next pointer and one for the successor's prev pointer."
  },
  {
    "id": "dsa_u3_easy_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "Which principle describes the fundamental operating behavior of a Stack?",
    "code": "// Stack operations: push(x), pop()",
    "options": [
      "LIFO (Last In First Out)",
      "FIFO (First In First Out)",
      "Random Access",
      "Priority Based"
    ],
    "correctAnswer": 0,
    "explanation": "A stack operates on LIFO (Last In, First Out), where the most recently added item is the first one removed."
  },
  {
    "id": "dsa_u3_easy_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "Which principle describes the fundamental operating behavior of a standard Queue?",
    "code": "// Queue operations: enqueue(x), dequeue()",
    "options": [
      "FIFO (First In First Out)",
      "LIFO (Last In First Out)",
      "Highest Priority First",
      "Sorted Order"
    ],
    "correctAnswer": 0,
    "explanation": "A queue operates on FIFO (First In, First Out), where elements leave the queue in the exact order they entered."
  },
  {
    "id": "dsa_u3_easy_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In a fixed-size array-based stack of capacity MAX, what condition indicates a Stack Overflow?",
    "code": "int top; // initialized to -1",
    "options": [
      "top == MAX - 1",
      "top == 0",
      "top == -1",
      "top == MAX"
    ],
    "correctAnswer": 0,
    "explanation": "Since indices run from 0 to MAX - 1, a stack is completely full (overflow) when top == MAX - 1."
  },
  {
    "id": "dsa_u3_easy_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What condition indicates a Stack Underflow?",
    "code": "int pop() {\n    if (top == ____) { printf(\"Stack Underflow\"); return -1; }\n    return arr[top--];\n}",
    "options": [
      "-1",
      "0",
      "MAX - 1",
      "MAX"
    ],
    "correctAnswer": 0,
    "explanation": "When the stack contains no elements, top equals -1. Attempting to pop in this state causes stack underflow."
  },
  {
    "id": "dsa_u3_easy_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the time complexity of the push() and pop() operations on a stack implemented with an array?",
    "code": "void push(int x) { arr[++top] = x; }\nint pop() { return arr[top--]; }",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctAnswer": 0,
    "explanation": "Array-based stack push and pop perform a single index increment/decrement and array assignment, taking O(1) constant time."
  },
  {
    "id": "dsa_u3_easy_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What does the 'peek' (or 'top') operation do on a stack?",
    "code": "int val = peek();",
    "options": [
      "Returns the value of the top element without removing it from the stack",
      "Removes and returns the top element",
      "Empties the entire stack",
      "Finds the minimum element in O(1) time"
    ],
    "correctAnswer": 0,
    "explanation": "Peek inspects the topmost element currently at index top without decrementing top or removing the element."
  },
  {
    "id": "dsa_u3_easy_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "In a standard queue implemented with an array, at which ends do insertion and deletion take place?",
    "code": "// Enqueue and Dequeue ends",
    "options": [
      "Insertion at Rear, Deletion at Front",
      "Insertion at Front, Deletion at Rear",
      "Both Insertion and Deletion at Front",
      "Both Insertion and Deletion at Rear"
    ],
    "correctAnswer": 0,
    "explanation": "In a queue, new elements enter at the rear (tail) and depart from the front (head)."
  },
  {
    "id": "dsa_u3_easy_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is 'Polish Notation' more commonly known as in Computer Science?",
    "code": "+ A B // Operator precedes operands",
    "options": [
      "Prefix Notation",
      "Postfix Notation",
      "Infix Notation",
      "Reverse Polish Notation"
    ],
    "correctAnswer": 0,
    "explanation": "Polish Notation (named after logician Jan \u0141ukasiewicz) places operators before their operands, which is Prefix Notation."
  },
  {
    "id": "dsa_u3_easy_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is 'Reverse Polish Notation' (RPN) commonly known as?",
    "code": "A B + // Operands precede operator",
    "options": [
      "Postfix Notation",
      "Prefix Notation",
      "Infix Notation",
      "Tree Notation"
    ],
    "correctAnswer": 0,
    "explanation": "Reverse Polish Notation places operands first followed by the operator, which is Postfix Notation."
  },
  {
    "id": "dsa_u3_easy_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What major advantage do Postfix and Prefix expressions have over Infix expressions in compilers and calculators?",
    "code": "// Infix: (A + B) * C vs Postfix: A B + C *",
    "options": [
      "They require zero parentheses to dictate operator precedence and associativity",
      "They execute in negative time",
      "They consume less storage on magnetic disks",
      "They can only be parsed using floating-point hardware"
    ],
    "correctAnswer": 0,
    "explanation": "In postfix and prefix notations, the evaluation order is strictly unambiguous based on element position without requiring parentheses or precedence rules."
  },
  {
    "id": "dsa_u3_easy_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the time complexity of enqueue and dequeue operations in a properly implemented Linked List Queue?",
    "code": "// With front and rear pointers",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctAnswer": 0,
    "explanation": "With explicit front and rear pointers, appending at rear and removing at front are both O(1) constant time operations."
  },
  {
    "id": "dsa_u3_easy_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What does 'Deque' stand for in Data Structures?",
    "code": "// Operations: push_front, push_back, pop_front, pop_back",
    "options": [
      "Double-Ended Queue",
      "Decoupled Queue",
      "Dynamic Element Queue",
      "Direct Execution Queue"
    ],
    "correctAnswer": 0,
    "explanation": "Deque stands for Double-Ended Queue, a generalized queue allowing element insertion and deletion at both the front and rear ends."
  },
  {
    "id": "dsa_u3_easy_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is a 'Priority Queue'?",
    "code": "// Dequeue yields element with highest priority regardless of arrival time",
    "options": [
      "A queue where each element has an associated priority, and the element with the highest priority is served before lower-priority elements",
      "A queue that runs exclusively on prioritized real-time operating systems",
      "A queue that only accepts VIP user accounts",
      "A LIFO stack with 2 pointers"
    ],
    "correctAnswer": 0,
    "explanation": "In a Priority Queue, elements are dequeued based on priority order rather than pure arrival sequence (FIFO)."
  },
  {
    "id": "dsa_u3_easy_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What limitation of a simple linear array queue does a 'Circular Queue' resolve?",
    "code": "// Linear queue false overflow: rear reaches MAX - 1 even though front > 0",
    "options": [
      "False Overflow: memory before 'front' is reclaimed and reused using modulo arithmetic",
      "Circular queues have infinite storage capacity",
      "Circular queues eliminate all CPU cache misses",
      "Linear queues cannot store integer types"
    ],
    "correctAnswer": 0,
    "explanation": "In a simple linear queue, deleted slots before front become unusable when rear reaches the end (false overflow). Circular queues wrap around using modulo arithmetic."
  },
  {
    "id": "dsa_u3_easy_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_easy",
    "difficulty": "easy",
    "language": "both",
    "question": "What is the value of top after executing: push(10), push(20), pop(), push(30) on an initially empty stack (top = -1)?",
    "code": "Stack s;\n// Initial top = -1\ns.push(10); // top = 0\ns.push(20); // top = 1\ns.pop();    // top = 0\ns.push(30); // top = 1",
    "options": [
      "1",
      "0",
      "2",
      "-1"
    ],
    "correctAnswer": 0,
    "explanation": "push(10)->top=0; push(20)->top=1; pop()->top=0; push(30)->top=1. The final index top is 1."
  },
  {
    "id": "dsa_u3_med_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the equivalent Postfix expression for the Infix expression: (A + B) * C?",
    "code": "// Infix: (A + B) * C",
    "options": [
      "A B + C *",
      "A B C + *",
      "* + A B C",
      "A + B C *"
    ],
    "correctAnswer": 0,
    "explanation": "Parentheses (A + B) are evaluated first to yield postfix 'A B +'. Multiplying by C appends C and the multiplication operator: 'A B + C *'."
  },
  {
    "id": "dsa_u3_med_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the result of evaluating the Postfix expression: 6 3 2 + * 5 - ?",
    "code": "// Postfix: 6 3 2 + * 5 -",
    "options": [
      "25",
      "30",
      "15",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "Push 6, 3, 2. Op '+': pop 2, 3 -> 3+2=5, push 5. Op '*': pop 5, 6 -> 6*5=30, push 30. Push 5. Op '-': pop 5, 30 -> 30-5=25. Result = 25."
  },
  {
    "id": "dsa_u3_med_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In a Circular Queue of capacity N using indices 0 to N-1, what is the formula to advance the 'rear' pointer?",
    "code": "rear = _______;",
    "options": [
      "(rear + 1) % N",
      "rear + 1",
      "(rear + 1) / N",
      "rear % N + 1"
    ],
    "correctAnswer": 0,
    "explanation": "Modulo arithmetic (rear + 1) % N wraps rear from index N - 1 back to 0 seamlessly."
  },
  {
    "id": "dsa_u3_med_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What condition indicates that a Circular Queue (with front and rear initialized to -1) is completely FULL?",
    "code": "// Capacity = MAX",
    "options": [
      "(rear + 1) % MAX == front",
      "rear == front",
      "rear == MAX - 1",
      "front == -1"
    ],
    "correctAnswer": 0,
    "explanation": "A circular queue is full when the next position after rear (using modulo arithmetic) collides with front: (rear + 1) % MAX == front."
  },
  {
    "id": "dsa_u3_med_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "When converting Infix to Postfix using the Shunting-Yard algorithm with a stack, what is done when an operand is encountered?",
    "code": "if (isalnum(token)) {\n    // What to do with operand token?\n}",
    "options": [
      "Directly append the operand to the output postfix string",
      "Push the operand onto the operator stack",
      "Pop all operators from the stack",
      "Clear the stack and throw an error"
    ],
    "correctAnswer": 0,
    "explanation": "Operands (numbers/variables) are immediately written to the output postfix expression, preserving their relative order."
  },
  {
    "id": "dsa_u3_med_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "When converting Infix to Postfix, what action is taken when a closing parenthesis ')' is encountered?",
    "code": "if (token == ')') {\n    // Pop and output operators until:\n}",
    "options": [
      "Pop operators from the stack and append to output until an opening parenthesis '(' is encountered, then discard the '('",
      "Push ')' onto the operator stack",
      "Clear the entire stack immediately",
      "Append ')' directly to the output"
    ],
    "correctAnswer": 0,
    "explanation": "A closing parenthesis triggers popping and outputting of all stacked operators until the matching '(' is popped and discarded."
  },
  {
    "id": "dsa_u3_med_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In an array-based binary min-heap implementation of a Priority Queue, if a node is at index i (0-indexed), what are the indices of its children?",
    "code": "// Node at index i",
    "options": [
      "Left child: 2i + 1, Right child: 2i + 2",
      "Left child: 2i, Right child: 2i + 1",
      "Left child: i / 2, Right child: i / 2 + 1",
      "Left child: i + 1, Right child: i + 2"
    ],
    "correctAnswer": 0,
    "explanation": "In 0-indexed array representations of binary heaps, the left child of index i is at 2i + 1 and the right child is at 2i + 2."
  },
  {
    "id": "dsa_u3_med_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the Postfix equivalent of the Infix expression: A + B * C?",
    "code": "// Infix: A + B * C (Multiplication has higher precedence than addition)",
    "options": [
      "A B C * +",
      "A B + C *",
      "A B * C +",
      "+ A * B C"
    ],
    "correctAnswer": 0,
    "explanation": "Since * has higher precedence than +, B * C is converted first to 'B C *'. Then A + (B C *) becomes 'A B C * +'."
  },
  {
    "id": "dsa_u3_med_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What data structure is used by runtime execution environments to manage function calls, local variables, and return addresses?",
    "code": "// Call stack execution frame",
    "options": [
      "Call Stack",
      "Circular Queue",
      "Priority Queue",
      "Double-Ended Deque"
    ],
    "correctAnswer": 0,
    "explanation": "The Call Stack stores activation records (stack frames) for active subroutines, following LIFO unwinding as functions return."
  },
  {
    "id": "dsa_u3_med_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "Which of the following is a classic application of a Stack in Computer Science?",
    "code": "// Stack applications",
    "options": [
      "Syntax parsing and matching of balanced parentheses: (), {}, []",
      "CPU Round-Robin scheduling",
      "Breadth-First Search (BFS) graph traversal",
      "Cache line eviction using FIFO"
    ],
    "correctAnswer": 0,
    "explanation": "Checking balanced parentheses pushes opening brackets onto a stack and pops when closing brackets match, detecting nesting violations."
  },
  {
    "id": "dsa_u3_med_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In a Linked List implementation of a Stack, which end of the list should serve as the 'top' for optimal O(1) performance?",
    "code": "// Stack using singly linked list: Head vs Tail",
    "options": [
      "The Head of the list (push and pop at head in O(1) time)",
      "The Tail of the list without tail pointer",
      "The Middle node",
      "Alternating between head and tail"
    ],
    "correctAnswer": 0,
    "explanation": "Inserting and deleting at the head of a singly linked list takes O(1) time, making the head the ideal stack top."
  },
  {
    "id": "dsa_u3_med_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In a Deque implemented using a doubly linked list with head and tail pointers, what is the time complexity of push_front, push_back, pop_front, and pop_back?",
    "code": "// Deque operations at both ends",
    "options": [
      "All four operations run in O(1) constant time",
      "Push operations are O(1), pop operations are O(n)",
      "Front operations are O(1), back operations are O(n)",
      "All four operations run in O(log n)"
    ],
    "correctAnswer": 0,
    "explanation": "With a doubly linked list maintaining head and tail pointers, inserting or deleting at either end requires only updating immediate node links in O(1) time."
  },
  {
    "id": "dsa_u3_med_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the equivalent Postfix expression for: A * (B + C) / D?",
    "code": "// Infix: A * (B + C) / D",
    "options": [
      "A B C + * D /",
      "A B C * + D /",
      "A B C + D / *",
      "A B * C + D /"
    ],
    "correctAnswer": 0,
    "explanation": "(B + C) becomes 'B C +'. A * (B C +) becomes 'A B C + *'. Dividing by D appends D and '/': 'A B C + * D /'."
  },
  {
    "id": "dsa_u3_med_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "What is the value of the Prefix expression: - + 8 2 3?",
    "code": "// Prefix: - + 8 2 3 (Evaluate from right to left)",
    "options": [
      "7",
      "13",
      "3",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "Scanning right-to-left: operands 3, 2, 8. Op '+': 8 + 2 = 10. Op '-': 10 - 3 = 7. Result = 7."
  },
  {
    "id": "dsa_u3_med_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_medium",
    "difficulty": "medium",
    "language": "both",
    "question": "In a Circular Queue of size 5 with front = 2 and rear = 4, how many elements are currently in the queue?",
    "code": "// Capacity = 5, front = 2, rear = 4",
    "options": [
      "3 elements",
      "2 elements",
      "4 elements",
      "5 elements"
    ],
    "correctAnswer": 0,
    "explanation": "Elements reside at indices 2, 3, 4, which is (rear - front + 1) = (4 - 2 + 1) = 3 elements."
  },
  {
    "id": "dsa_u3_hard_q1",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "How can a Queue be implemented using TWO Stacks (stack1 and stack2) such that enqueue is O(1) and dequeue is amortized O(1)?",
    "code": "// Two-stack queue implementation",
    "options": [
      "Enqueue pushes directly onto stack1; Dequeue pops from stack2. If stack2 is empty, transfer all elements from stack1 to stack2",
      "Push to stack1, pop from stack1, ignore stack2",
      "Both enqueue and dequeue must transfer elements back and forth on every single call in O(n^2)",
      "Stacks cannot simulate a queue under any circumstances"
    ],
    "correctAnswer": 0,
    "explanation": "Pushing to stack1 is O(1). On dequeue, if stack2 is empty, transferring stack1 reverses order into stack2. Each element is transferred once, yielding amortized O(1) dequeue."
  },
  {
    "id": "dsa_u3_hard_q2",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the correct Postfix form of the Infix expression with right-associative exponentiation: A ^ B ^ C?",
    "code": "// '^' operator has right-to-left associativity: A ^ (B ^ C)",
    "options": [
      "A B C ^ ^",
      "A B ^ C ^",
      "^ ^ A B C",
      "A B C ^ +"
    ],
    "correctAnswer": 0,
    "explanation": "Due to right-to-left associativity, B ^ C is evaluated first ('B C ^'). Then A ^ (B C ^) evaluates to 'A B C ^ ^'."
  },
  {
    "id": "dsa_u3_hard_q3",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the Prefix (Polish) notation for the Infix expression: (A - B / C) * (A / K - L)?",
    "code": "// Convert to Prefix",
    "options": [
      "* - A / B C - / A K L",
      "- / * A B C / A K L",
      "* A - B / C A / K - L",
      "/ * - A B C - A K L"
    ],
    "correctAnswer": 0,
    "explanation": "Left subexpression: (A - (B/C)) = '- A / B C'. Right subexpression: ((A/K) - L) = '- / A K L'. Combined with *: '* - A / B C - / A K L'."
  },
  {
    "id": "dsa_u3_hard_q4",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "When evaluating Postfix expressions, what is the critical operand order when popping for a subtraction or division operator?",
    "code": "int op2 = pop(); // Top of stack\nint op1 = pop(); // Second element",
    "options": [
      "The second popped element is the left operand: op1 - op2 (or op1 / op2)",
      "The first popped element is the left operand: op2 - op1",
      "Order does not matter because subtraction is commutative",
      "Both operands must be multiplied together first"
    ],
    "correctAnswer": 0,
    "explanation": "In postfix 'A B -', B was pushed last (on top) and A was pushed first. Therefore op2 = pop() is B, op1 = pop() is A, and calculation is op1 - op2 (A - B)."
  },
  {
    "id": "dsa_u3_hard_q5",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In a Priority Queue implemented using a Max-Heap array of size N, what are the time complexities of insert() and extractMax()?",
    "code": "// Binary heap priority queue operations",
    "options": [
      "Both insert() and extractMax() run in O(log N) time",
      "insert() is O(1), extractMax() is O(N)",
      "insert() is O(N), extractMax() is O(1)",
      "Both run in O(N log N) time"
    ],
    "correctAnswer": 0,
    "explanation": "Heap insertion adds to the end and bubbles up (heapify-up) in O(log N). ExtractMax replaces the root with the last leaf and bubbles down (heapify-down) in O(log N)."
  },
  {
    "id": "dsa_u3_hard_q6",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the minimum number of Queues required to implement a Stack?",
    "code": "// Simulating LIFO stack using FIFO queues",
    "options": [
      "Two queues (or one queue using rotation)",
      "Zero queues",
      "Three queues minimum",
      "Queues cannot simulate stacks"
    ],
    "correctAnswer": 0,
    "explanation": "A stack can be implemented using two queues (by transferring elements to invert FIFO order), or using a single queue by rotating N - 1 elements after each push."
  },
  {
    "id": "dsa_u3_hard_q7",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In an array implementation of a Circular Queue of size N, if we do not use a separate 'count' variable, what is the maximum number of elements the queue can store?",
    "code": "// One slot is reserved to distinguish full from empty",
    "options": [
      "N - 1 elements",
      "N elements",
      "N / 2 elements",
      "N + 1 elements"
    ],
    "correctAnswer": 0,
    "explanation": "To distinguish between a completely full queue and an empty queue without a count flag, one slot is left open, allowing at most N - 1 elements."
  },
  {
    "id": "dsa_u3_hard_q8",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the output of the following C program using a stack?",
    "code": "#include <stdio.h>\nint stack[10], top = -1;\nvoid push(int v) { stack[++top] = v; }\nint pop() { return stack[top--]; }\nint main() {\n    push(5); push(10); push(15);\n    int a = pop();\n    push(20);\n    int b = pop() + a;\n    printf(\"%d\", b);\n    return 0;\n}",
    "options": [
      "35",
      "25",
      "30",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "push 5, 10, 15. pop() yields a = 15. push 20. pop() yields 20. b = 20 + 15 = 35. Prints 35."
  },
  {
    "id": "dsa_u3_hard_q9",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "Which of the following expression transformations is FALSE?",
    "code": "// Expression notation comparisons",
    "options": [
      "Infix: A + B * C -> Prefix: + A * B C",
      "Infix: (A + B) * C -> Prefix: * + A B C",
      "Infix: A + B * C -> Postfix: A B C * +",
      "Infix: A * B + C -> Prefix: * + A B C"
    ],
    "correctAnswer": 3,
    "explanation": "For Infix: A * B + C, multiplication has higher precedence than addition: (A * B) + C. In Prefix, this is '+ * A B C', NOT '* + A B C'."
  },
  {
    "id": "dsa_u3_hard_q10",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the time complexity of checking whether an expression with N brackets containing '(', ')', '{', '}', '[', ']' is correctly balanced?",
    "code": "bool isBalanced(string expr);",
    "options": [
      "O(n) time, O(n) auxiliary space",
      "O(1) time, O(1) space",
      "O(n^2) time, O(1) space",
      "O(log n) time, O(n) space"
    ],
    "correctAnswer": 0,
    "explanation": "A single pass scans the N characters, pushing opening brackets and popping matching closing brackets on a stack of maximum depth N, taking O(N) time and O(N) space."
  },
  {
    "id": "dsa_u3_hard_q11",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In a Monotonic Decreasing Stack, what invariant is strictly maintained as new elements are pushed?",
    "code": "while (!st.empty() && st.top() <= x) st.pop();\nst.push(x);",
    "options": [
      "Elements in the stack are strictly ordered from largest at the bottom to smallest at the top",
      "Elements are strictly sorted in ascending order from bottom to top",
      "The stack size never exceeds 2",
      "All negative numbers are rejected"
    ],
    "correctAnswer": 0,
    "explanation": "A monotonic decreasing stack pops any elements less than or equal to the incoming value, ensuring all elements from bottom to top are strictly in decreasing order."
  },
  {
    "id": "dsa_u3_hard_q12",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the optimal data structure to implement a Sliding Window Maximum algorithm of size K in an array of size N in O(N) total time?",
    "code": "// Find max in every sliding window of size K",
    "options": [
      "Monotonic Double-Ended Queue (Deque) storing indices in decreasing order of element values",
      "Binary Search Tree of size N",
      "Linear Stack with recursion",
      "Two Priority Queues taking O(N * K) time"
    ],
    "correctAnswer": 0,
    "explanation": "A monotonic deque maintains window indices in decreasing order of value. Each element is pushed and popped at most once, achieving linear O(N) time."
  },
  {
    "id": "dsa_u3_hard_q13",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "What is the Prefix notation for the Infix expression: A / B ^ C + D * E - A * C?",
    "code": "// Precedence: ^ (highest), then * and /, then + and -",
    "options": [
      "- + / A ^ B C * D E * A C",
      "+ - / A B ^ C * D E * A C",
      "/ A ^ B C + * D E - * A C",
      "- + / A B C * D E * A C"
    ],
    "correctAnswer": 0,
    "explanation": "B^C = '^ B C'. A / (B^C) = '/ A ^ B C'. D * E = '* D E'. A * C = '* A C'. Summing first two = '+ / A ^ B C * D E'. Finally subtracting last: '- + / A ^ B C * D E * A C'."
  },
  {
    "id": "dsa_u3_hard_q14",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In an Input-Restricted Deque, what operations are permitted?",
    "code": "// Input-restricted deque constraint",
    "options": [
      "Insertion is permitted at only ONE end, but deletion is permitted at BOTH ends",
      "Deletion is permitted at only one end, but insertion is permitted at both ends",
      "Only positive numbers can be inserted",
      "Operations can only occur when the deque is half full"
    ],
    "correctAnswer": 0,
    "explanation": "An Input-Restricted Deque restricts insertions to a single designated end (e.g. rear), while allowing deletions from both the front and rear."
  },
  {
    "id": "dsa_u3_hard_q15",
    "subjectId": "dsa",
    "unitId": "dsa_unit3",
    "setId": "dsa_u3_hard",
    "difficulty": "hard",
    "language": "both",
    "question": "In an Output-Restricted Deque, what operations are permitted?",
    "code": "// Output-restricted deque constraint",
    "options": [
      "Deletion is permitted at only ONE end, but insertion is permitted at BOTH ends",
      "Insertion is permitted at only one end, but deletion is permitted at both ends",
      "Both insertion and deletion are prohibited",
      "Only string tokens can be output"
    ],
    "correctAnswer": 0,
    "explanation": "An Output-Restricted Deque restricts deletions to a single designated end (e.g. front), while allowing insertions at both the front and rear."
  }
];
