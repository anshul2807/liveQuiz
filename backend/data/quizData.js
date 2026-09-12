// Comprehensive C++ Question Bank based on syllabus.txt
// Unit 1: Concepts and Basics of C++ Programming (Sets 1-5, 75 MCQs)
// Unit 2: Pointers, Reference Variables, Arrays and String Concepts (Sets 1-5, 75 MCQs)
// Total 150 High-Quality C++ MCQs with Code Snippets & Explanations

export const SYLLABUS_UNITS = [
  {
    id: 'unit1',
    title: 'Unit I: Concepts and Basics of C++ Programming',
    description: 'OOP vs Procedural, cin/cout, Classes, Objects, Access Specifiers, Structs/Unions/Enums, Inline/Static functions, Friend functions, Function Overloading, Recursion, and Pass-by-Value/Address/Reference.',
    sets: [
      { id: 'u1s1', title: 'Set 1: OOP & I/O Basics', difficulty: 'easy', questionCount: 15 },
      { id: 'u1s2', title: 'Set 2: Classes, Objects & References', difficulty: 'easy', questionCount: 15 },
      { id: 'u1s3', title: 'Set 3: Inline, Static & Manipulators', difficulty: 'medium', questionCount: 15 },
      { id: 'u1s4', title: 'Set 4: Structs, Enums, Unions & Scope Rules', difficulty: 'medium', questionCount: 15 },
      { id: 'u1s5', title: 'Set 5: Friend Functions, Overloading & Recursion', difficulty: 'medium', questionCount: 15 },
    ]
  },
  {
    id: 'unit2',
    title: 'Unit II: Pointers, Reference Variables, Arrays & String Concepts',
    description: 'Void pointers, Pointer Arithmetic, Pointer to Pointer, Memory hazards (Dangling/Wild/Null), this pointer, Array of Objects, std::string class, Multidimensional Arrays, and Pointers to Data Members.',
    sets: [
      { id: 'u2s1', title: 'Set 1: Basic Pointers & Void Pointers', difficulty: 'easy', questionCount: 15 },
      { id: 'u2s2', title: 'Set 2: Pointer Arithmetic & Basic Strings', difficulty: 'easy', questionCount: 15 },
      { id: 'u2s3', title: 'Set 3: Pointer to Pointer & Memory Pitfalls', difficulty: 'medium', questionCount: 15 },
      { id: 'u2s4', title: 'Set 4: Pointers in Classes & "this" Pointer', difficulty: 'medium', questionCount: 15 },
      { id: 'u2s5', title: 'Set 5: Multidimensional Arrays, String Modifiers & Data Member Pointers', difficulty: 'medium', questionCount: 15 },
    ]
  }
];

export const QUIZ_QUESTIONS = [
  // ==========================================
  // UNIT 1 - SET 1: OOP & I/O Basics (Easy - 15 Qs)
  // ==========================================
  {
    id: 'u1s1q1',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What will be the output of the following C++ program using cin and cout stream extraction/insertion?',
    code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    cout << a + b << " " << a * b;
    return 0;
}`,
    options: ['30 200', '1020 200', '30200', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'The standard output stream cout evaluates (a + b) to 30, inserts a space " ", and then evaluates (a * b) to 200, resulting in "30 200".'
  },
  {
    id: 'u1s1q2',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'Which key feature distinguishes Object-Oriented Programming (OOP) from Procedural Programming paradigms?',
    code: `#include <iostream>
using namespace std;

class Car {
private:
    int speed;
public:
    void setSpeed(int s) { speed = s; }
};`,
    options: [
      'Focus on functions and global data step-by-step',
      'Data encapsulation, binding data together with methods operating on it',
      'Execution starts from main() only in procedural programming',
      'Lack of support for user-defined data types'
    ],
    correctAnswer: 1,
    explanation: 'OOP emphasizes Data Encapsulation, combining data (attributes) and methods (functions) inside classes to protect data from direct external modification.'
  },
  {
    id: 'u1s1q3',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What is the default access specifier for members of a C++ class if none is specified?',
    code: `#include <iostream>
using namespace std;

class Test {
    int x; // What is the access specifier of x?
public:
    Test() { x = 5; }
};`,
    options: ['public', 'protected', 'private', 'package-private'],
    correctAnswer: 2,
    explanation: 'In C++ classes, members are private by default. In C++ structs, members are public by default.'
  },
  {
    id: 'u1s1q4',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What will be the output of the following code defining a simple class object?',
    code: `#include <iostream>
using namespace std;

class Box {
public:
    int length;
    Box() { length = 15; }
};

int main() {
    Box b1;
    cout << b1.length;
    return 0;
}`,
    options: ['0', '15', 'Garbage value', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'When b1 is created, the default constructor initializes length to 15. Accessing b1.length via the dot operator prints 15.'
  },
  {
    id: 'u1s1q5',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'Which stream operator is used with cin for reading user input in C++?',
    code: `#include <iostream>
using namespace std;

int main() {
    int val;
    // Which operator goes here?
    // cin ... val;
}`,
    options: ['<< (Insertion operator)', '>> (Extraction operator)', '-> (Arrow operator)', ':: (Scope resolution)'],
    correctAnswer: 1,
    explanation: 'The >> operator is the stream extraction operator used with cin to read data from standard input.'
  },
  {
    id: 'u1s1q6',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What will happen when attempting to compile the following code accessing private class members?',
    code: `#include <iostream>
using namespace std;

class Sample {
    int data = 100;
};

int main() {
    Sample s;
    cout << s.data;
    return 0;
}`,
    options: [
      'Prints 100',
      'Prints 0',
      'Compilation error: "data" is a private member of "Sample"',
      'Runtime error'
    ],
    correctAnswer: 2,
    explanation: 'data is private by default in class Sample. Attempting to access s.data directly from main() causes a compilation error.'
  },
  {
    id: 'u1s1q7',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What is the output of the code snippet below involving default constructor initialization?',
    code: `#include <iostream>
using namespace std;

class Counter {
public:
    int count;
    Counter(int c = 10) {
        count = c;
    }
};

int main() {
    Counter c1;
    Counter c2(25);
    cout << c1.count << " " << c2.count;
    return 0;
}`,
    options: ['10 25', '0 25', '25 25', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'c1 uses the default parameter value 10 for count. c2 explicitly passes 25, so the output is "10 25".'
  },
  {
    id: 'u1s1q8',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'In C++ I/O streams, which header file is required to use cin and cout?',
    code: `#include <____>
using namespace std;

int main() {
    cout << "Hello C++";
    return 0;
}`,
    options: ['stdio.h', 'iostream', 'fstream', 'iomanip'],
    correctAnswer: 1,
    explanation: '<iostream> contains the declarations of standard input/output stream objects cin, cout, cerr, and clog.'
  },
  {
    id: 'u1s1q9',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What will be printed by the following object creation and function call code?',
    code: `#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }
};

int main() {
    Calculator calc;
    cout << calc.add(7, 8);
    return 0;
}`,
    options: ['15', '78', '0', 'Error'],
    correctAnswer: 0,
    explanation: 'calc.add(7, 8) evaluates 7 + 8 which returns 15 and prints it.'
  },
  {
    id: 'u1s1q10',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'Which statement accurately describes an Object in C++?',
    code: `// Example:
// Car myCar; // myCar is an object of type Car`,
    options: [
      'An object is a blueprint or template for data',
      'An object is an instance of a class that occupies memory',
      'An object is a built-in data type like int or double',
      'An object can only contain member functions, not variables'
    ],
    correctAnswer: 1,
    explanation: 'A class is the blueprint/type definition, while an Object is a real-world instance of that class that gets allocated in memory.'
  },
  {
    id: 'u1s1q11',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What is the output of the following C++ code containing a member function?',
    code: `#include <iostream>
using namespace std;

class Greet {
public:
    void printMsg() {
        cout << "Welcome";
    }
};

int main() {
    Greet g;
    g.printMsg();
    return 0;
}`,
    options: ['Welcome', 'Greet', '0', 'Nothing is printed'],
    correctAnswer: 0,
    explanation: 'Calling g.printMsg() executes cout << "Welcome", outputting "Welcome".'
  },
  {
    id: 'u1s1q12',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'Which stream manipulator forces a newline character and flushes the output buffer?',
    code: `#include <iostream>
using namespace std;

int main() {
    cout << "Line 1" << ______ << "Line 2";
    return 0;
}`,
    options: ['flush', 'endl', 'ends', 'setw'],
    correctAnswer: 1,
    explanation: 'endl inserts a newline character into the output stream and flushes the output buffer.'
  },
  {
    id: 'u1s1q13',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What is the main advantage of Object-Oriented Programming code reusability?',
    code: `class Vehicle { /* ... */ };
class Bike : public Vehicle { /* Reuses Vehicle code */ };`,
    options: ['Pointers', 'Inheritance', 'Macros', 'Global variables'],
    correctAnswer: 1,
    explanation: 'Inheritance allows a derived class to inherit properties and methods from a base class, promoting reusability.'
  },
  {
    id: 'u1s1q14',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'What will be the output of the code snippet below?',
    code: `#include <iostream>
using namespace std;

class Alpha {
    int x;
public:
    Alpha(int v) { x = v; }
    int getX() { return x; }
};

int main() {
    Alpha a(42);
    cout << a.getX();
    return 0;
}`,
    options: ['42', '0', 'Garbage value', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'Alpha a(42) calls the parameterized constructor initializing private x to 42. getX() returns 42.'
  },
  {
    id: 'u1s1q15',
    unitId: 'unit1',
    setId: 'u1s1',
    difficulty: 'easy',
    question: 'Which of the following is NOT a fundamental feature of OOP?',
    code: `// C++ OOP Principles`,
    options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Global Goto Jumps'],
    correctAnswer: 3,
    explanation: 'The four main pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism. Global Goto Jumps are unstructured programming constructs.'
  },

  // ==========================================
  // UNIT 1 - SET 2: Classes, Objects & References (Easy - 15 Qs)
  // ==========================================
  {
    id: 'u1s2q1',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What will be the output of the following program utilizing a C++ reference variable?',
    code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int &ref = x;
    ref = 20;
    cout << x << " " << ref;
    return 0;
}`,
    options: ['10 20', '20 20', '10 10', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'ref is an alias for x. Modifying ref to 20 changes x to 20. Both x and ref refer to the same memory location, printing "20 20".'
  },
  {
    id: 'u1s2q2',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'Which of the following syntax correctly declares a reference variable `ref` for integer `num`?',
    code: `int num = 50;`,
    options: ['int &ref = num;', 'int ref = &num;', 'int *ref = num;', 'reference<int> ref = num;'],
    correctAnswer: 0,
    explanation: 'In C++, a reference variable is declared using the & symbol: `int &ref = num;`.'
  },
  {
    id: 'u1s2q3',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What is the output of the following code demonstrating Call by Value?',
    code: `#include <iostream>
using namespace std;

void modify(int n) {
    n = n + 100;
}

int main() {
    int val = 50;
    modify(val);
    cout << val;
    return 0;
}`,
    options: ['150', '50', '0', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'In Call by Value, a copy of `val` is passed to function `modify`. Changes made inside the function do not affect the original variable `val` in main.'
  },
  {
    id: 'u1s2q4',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What is the output of the code demonstrating Call by Reference?',
    code: `#include <iostream>
using namespace std;

void modify(int &n) {
    n = n + 100;
}

int main() {
    int val = 50;
    modify(val);
    cout << val;
    return 0;
}`,
    options: ['150', '50', '100', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'Because parameter `n` is passed by reference (`int &n`), modifications inside `modify` directly alter the original variable `val` to 150.'
  },
  {
    id: 'u1s2q5',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'Which access specifier makes class members accessible to derived classes but not outside the class hierarchy?',
    code: `class Parent {
_____:
    int protectedData;
};`,
    options: ['public', 'private', 'protected', 'internal'],
    correctAnswer: 2,
    explanation: '`protected` access specifier allows member access within the class itself and its derived (child) classes.'
  },
  {
    id: 'u1s2q6',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What will happen if a reference variable is declared without initialization?',
    code: `#include <iostream>
using namespace std;

int main() {
    int &ref; // No initialization!
    return 0;
}`,
    options: [
      'Compiles fine and points to NULL',
      'Compiles fine and has garbage value',
      'Compilation error: reference must be initialized',
      'Runtime exception'
    ],
    correctAnswer: 2,
    explanation: 'In C++, a reference variable MUST be initialized at the time of declaration because it cannot exist independently without referring to an object.'
  },
  {
    id: 'u1s2q7',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What is the output of the following function call by address?',
    code: `#include <iostream>
using namespace std;

void update(int *ptr) {
    *ptr = 99;
}

int main() {
    int number = 10;
    update(&number);
    cout << number;
    return 0;
}`,
    options: ['10', '99', 'Garbage value', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'Passing `&number` (address of number) allows function `update` to dereference `ptr` (`*ptr = 99`), modifying `number` to 99.'
  },
  {
    id: 'u1s2q8',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'Can a C++ reference variable be re-bound to refer to another variable after initialization?',
    code: `int a = 10, b = 20;
int &ref = a;
ref = b; // What does this line do?`,
    options: [
      'Yes, ref now points to b',
      'No, ref remains an alias for a, but the value of b (20) is assigned to a',
      'Causes a runtime crash',
      'Compilation Error: re-binding reference is illegal syntax'
    ],
    correctAnswer: 1,
    explanation: 'A reference cannot be re-bound to another object. The assignment `ref = b` copies the value of `b` (20) into variable `a` referenced by `ref`.'
  },
  {
    id: 'u1s2q9',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What will be the output of creating multiple objects of the following class?',
    code: `#include <iostream>
using namespace std;

class Item {
public:
    int id;
    Item(int i) { id = i; }
};

int main() {
    Item item1(101);
    Item item2(102);
    cout << item1.id + item2.id;
    return 0;
}`,
    options: ['203', '101', '102', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'item1.id is 101, item2.id is 102. Their sum 101 + 102 is 203.'
  },
  {
    id: 'u1s2q10',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'Which of the following is TRUE regarding Call by Reference versus Call by Address in C++?',
    code: `// Call by Address: void f(int *p);
// Call by Reference: void f(int &r);`,
    options: [
      'Call by Reference requires explicit dereferencing (*r) inside the function',
      'Call by Address uses pointer syntax (&var and *ptr), while Call by Reference uses cleaner reference syntax',
      'Call by Address creates a copy of the actual object',
      'Call by Reference accepts NULL arguments'
    ],
    correctAnswer: 1,
    explanation: 'Call by Address uses explicit pointers (`*`) and memory addresses (`&`), whereas Call by Reference provides cleaner alias syntax without needing explicit dereference operators.'
  },
  {
    id: 'u1s2q11',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What is the output of the following code snippet?',
    code: `#include <iostream>
using namespace std;

class Point {
    int x, y;
public:
    Point(int xVal, int yVal) : x(xVal), y(yVal) {}
    void print() { cout << "(" << x << "," << y << ")"; }
};

int main() {
    Point p(3, 4);
    p.print();
    return 0;
}`,
    options: ['(3,4)', '3,4', '(0,0)', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'The member initializer list `: x(xVal), y(yVal)` initializes x to 3 and y to 4, printing "(3,4)".'
  },
  {
    id: 'u1s2q12',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What happens when a member function is defined inside a class definition body by default?',
    code: `class Demo {
public:
    void display() { // Defined inside class
        cout << "Inside";
    }
};`,
    options: [
      'It is automatically treated as an inline function candidate by the compiler',
      'It becomes a static function',
      'It causes a compilation error unless labeled inline',
      'It becomes a virtual function'
    ],
    correctAnswer: 0,
    explanation: 'In C++, any member function defined inside the class declaration is implicitly considered an inline function candidate by the compiler.'
  },
  {
    id: 'u1s2q13',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What is the output of the program below?',
    code: `#include <iostream>
using namespace std;

int main() {
    int val = 5;
    int &r1 = val;
    int &r2 = r1;
    r2 = 12;
    cout << val;
    return 0;
}`,
    options: ['5', '12', 'Garbage value', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'r1 is a reference to val, and r2 is a reference to r1 (and thus val). Setting r2 = 12 updates val to 12.'
  },
  {
    id: 'u1s2q14',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'Which access specifier allows maximum access to any part of the program?',
    code: `class Example {
_____:
    int publicValue;
};`,
    options: ['private', 'protected', 'public', 'friend'],
    correctAnswer: 2,
    explanation: '`public` members can be accessed from anywhere outside the class where the object is visible.'
  },
  {
    id: 'u1s2q15',
    unitId: 'unit1',
    setId: 'u1s2',
    difficulty: 'easy',
    question: 'What will be printed by the following code?',
    code: `#include <iostream>
using namespace std;

void swapVals(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 1, y = 2;
    swapVals(x, y);
    cout << x << y;
    return 0;
}`,
    options: ['12', '21', '11', '22'],
    correctAnswer: 1,
    explanation: 'swapVals uses reference parameters, correctly swapping the original values of x and y so x becomes 2 and y becomes 1, printing "21".'
  },

  // ==========================================
  // UNIT 1 - SET 3: Inline, Static & Manipulators (Medium - 15 Qs)
  // ==========================================
  {
    id: 'u1s3q1',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What will be the output of the following program containing static data members?',
    code: `#include <iostream>
using namespace std;

class Widget {
public:
    static int count;
    Widget() { count++; }
};

int Widget::count = 0; // Definition

int main() {
    Widget w1, w2, w3;
    cout << Widget::count;
    return 0;
}`,
    options: ['0', '1', '3', 'Compilation Error'],
    correctAnswer: 2,
    explanation: 'Static data members are shared across all instances of the class. Creating 3 objects (w1, w2, w3) increments `count` three times, outputting 3.'
  },
  {
    id: 'u1s3q2',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What restriction applies to C++ Static Member Functions?',
    code: `#include <iostream>
using namespace std;

class Test {
    int nonStaticVal = 10;
    static int staticVal;
public:
    static void show() {
        // Can static member functions access nonStaticVal directly?
    }
};`,
    options: [
      'Static member functions can access both static and non-static variables directly',
      'Static member functions can ONLY access static data members and static functions directly (they have no "this" pointer)',
      'Static member functions cannot return any value',
      'Static member functions must be defined inline inside the class only'
    ],
    correctAnswer: 1,
    explanation: 'Static member functions do not receive an implicit `this` pointer, so they can only access static members directly.'
  },
  {
    id: 'u1s3q3',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What is the primary objective of declaring a function as `inline` in C++?',
    code: `inline int cube(int x) {
    return x * x * x;
}`,
    options: [
      'To prevent the function from being overridden in derived classes',
      'To eliminate function call overhead by expanding function code at the call site',
      'To allow the function to accept variable number of arguments',
      'To make the function execute asynchronously in a separate thread'
    ],
    correctAnswer: 1,
    explanation: '`inline` functions suggest compiler expansion of function body at call sites to avoid push/pop stack stack-frame overhead.'
  },
  {
    id: 'u1s3q4',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What will be the output of using iomanip manipulators `setw` and `setfill`?',
    code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << setfill('#') << setw(5) << 42;
    return 0;
}`,
    options: ['42###', '###42', '#42#', '42'],
    correctAnswer: 1,
    explanation: '`setw(5)` specifies a total field width of 5, right-justified by default. `setfill(\'#\')` fills leading empty positions with "#", printing "###42".'
  },
  {
    id: 'u1s3q5',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What will happen if static data member is declared in class but NOT defined outside the class scope?',
    code: `#include <iostream>
using namespace std;

class Account {
public:
    static int totalAccounts; // Declaration only!
};

int main() {
    cout << Account::totalAccounts;
    return 0;
}`,
    options: [
      'Prints 0',
      'Prints garbage value',
      'Linker Error (Undefined Reference to Account::totalAccounts)',
      'Compilation Error: static members are forbidden'
    ],
    correctAnswer: 2,
    explanation: 'Static data members require a formal definition outside the class scope (e.g. `int Account::totalAccounts = 0;`). Omitting it results in a linker error.'
  },
  {
    id: 'u1s3q6',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What is the output of the following static function execution?',
    code: `#include <iostream>
using namespace std;

class MathUtil {
public:
    static int multiply(int a, int b) {
        return a * b;
    }
};

int main() {
    cout << MathUtil::multiply(6, 7);
    return 0;
}`,
    options: ['42', '0', 'Compilation Error: static function requires object instance', 'Runtime error'],
    correctAnswer: 0,
    explanation: 'Static member functions can be called directly using class scope resolution `MathUtil::multiply(6, 7)` without creating an object instance.'
  },
  {
    id: 'u1s3q7',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'When will the C++ compiler likely IGNORE the `inline` keyword request?',
    code: `inline int calculateFactorial(int n) {
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
}`,
    options: [
      'When the function contains recursive calls or complex loops',
      'When the function returns an integer',
      'When the function is called inside main()',
      'When the function takes more than 1 argument'
    ],
    correctAnswer: 0,
    explanation: 'The `inline` keyword is a compiler hint. Compilers typically ignore inline requests for recursive functions, functions containing loops, switch statements, or large bodies.'
  },
  {
    id: 'u1s3q8',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What will be the output of the floating-point manipulator `fixed` and `setprecision` code?',
    code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double pi = 3.14159265;
    cout << fixed << setprecision(2) << pi;
    return 0;
}`,
    options: ['3.14', '3.1415', '3.1', '3.14159265'],
    correctAnswer: 0,
    explanation: '`fixed` combined with `setprecision(2)` formats floating point output to exactly 2 digits after the decimal point (rounded to 3.14).'
  },
  {
    id: 'u1s3q9',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What is the difference between non-inline and inline member function definition syntax outside the class?',
    code: `class Sample {
public:
    void func1();
    inline void func2();
};
void Sample::func1() {} // Non-inline
inline void Sample::func2() {} // Inline outside class`,
    options: [
      'func2 requires the `inline` keyword before its definition outside class body',
      'func1 cannot be defined outside the class',
      'func2 becomes a static function',
      'There is no difference'
    ],
    correctAnswer: 0,
    explanation: 'To define an inline member function outside the class definition, the keyword `inline` must explicitly precede the function header.'
  },
  {
    id: 'u1s3q10',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What is the output of the following static count program?',
    code: `#include <iostream>
using namespace std;

class Base {
public:
    static int val;
    void inc() { val++; }
};

int Base::val = 10;

int main() {
    Base b1, b2;
    b1.inc();
    b2.inc();
    cout << Base::val;
    return 0;
}`,
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    explanation: 'Base::val starts at 10. b1.inc() increments it to 11. b2.inc() increments the SAME shared variable to 12.'
  },
  {
    id: 'u1s3q11',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'Which header file must be included to use parameterized stream manipulators like `setw()` and `setprecision()`?',
    code: `#include <______>
using namespace std;`,
    options: ['<iostream>', '<iomanip>', '<stdlib.h>', '<sstream>'],
    correctAnswer: 1,
    explanation: '<iomanip> defines stream manipulators that take arguments (e.g. setw, setprecision, setfill).'
  },
  {
    id: 'u1s3q12',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What is the output of hex and oct stream manipulators?',
    code: `#include <iostream>
using namespace std;

int main() {
    int num = 16;
    cout << hex << num << " " << oct << num;
    return 0;
}`,
    options: ['16 16', '10 20', '10 16', 'a 20'],
    correctAnswer: 1,
    explanation: '16 in hexadecimal (`hex`) is 10. 16 in octal (`oct`) is 20 (2*8^1 + 0*8^0 = 16). Output is "10 20".'
  },
  {
    id: 'u1s3q13',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'Where are static data members stored in memory?',
    code: `// static int count;`,
    options: [
      'On the CPU registers',
      'On the function stack frame',
      'In the static / global data segment of memory',
      'On the dynamic heap memory'
    ],
    correctAnswer: 2,
    explanation: 'Static variables exist for the entire lifetime of the program and are stored in the global/static memory region.'
  },
  {
    id: 'u1s3q14',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'What is the output of the following inline expansion test code?',
    code: `#include <iostream>
using namespace std;

inline int maxVal(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maxVal(15, 25);
    return 0;
}`,
    options: ['15', '25', '0', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'maxVal(15, 25) evaluates (15 > 25) ? 15 : 25, returning 25.'
  },
  {
    id: 'u1s3q15',
    unitId: 'unit1',
    setId: 'u1s3',
    difficulty: 'medium',
    question: 'Can static member functions be marked as `const` in C++?',
    code: `class Test {
public:
    static void display() const; // Is this valid?
};`,
    options: [
      'Yes, it ensures static data cannot be modified',
      'No, because static member functions do not have a "this" pointer to qualify with const',
      'Yes, but only if the function returns void',
      'Yes, but only in C++20'
    ],
    correctAnswer: 1,
    explanation: '`const` member functions guarantee not to modify `*this`. Since static member functions lack a `this` pointer, declaring them `const` causes a compilation error.'
  },

  // ==========================================
  // UNIT 1 - SET 4: Structs, Enums, Unions & Scope Rules (Medium - 15 Qs)
  // ==========================================
  {
    id: 'u1s4q1',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What is the fundamental difference between a `struct` and a `class` in C++?',
    code: `struct A { int x; };
class B { int y; };`,
    options: [
      'Structs cannot contain member functions, whereas classes can',
      'Members of a struct are public by default; members of a class are private by default',
      'Structs are allocated on heap, while classes are allocated on stack',
      'Structs do not support constructors'
    ],
    correctAnswer: 1,
    explanation: 'In C++, `struct` and `class` are almost identical, except struct members and default inheritance are `public` by default, whereas class members and default inheritance are `private`.'
  },
  {
    id: 'u1s4q2',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What will be the size of the following C++ `union` on a 64-bit architecture?',
    code: `#include <iostream>
using namespace std;

union Data {
    int i;       // 4 bytes
    char c;      // 1 byte
    double d;    // 8 bytes
};

int main() {
    cout << sizeof(union Data);
    return 0;
}`,
    options: ['13 bytes (4+1+8)', '8 bytes', '4 bytes', '1 byte'],
    correctAnswer: 1,
    explanation: 'Unions share memory among all member elements. The size of a union is equal to the size of its largest member element (`double d`, 8 bytes).'
  },
  {
    id: 'u1s4q3',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What will be the output of accessing the global variable using the scope resolution operator `::`?',
    code: `#include <iostream>
using namespace std;

int val = 100; // Global

int main() {
    int val = 50; // Local
    cout << val << " " << ::val;
    return 0;
}`,
    options: ['50 50', '100 100', '50 100', '100 50'],
    correctAnswer: 2,
    explanation: '`val` resolves to local variable 50. `::val` uses global scope resolution operator to access global variable 100, outputting "50 100".'
  },
  {
    id: 'u1s4q4',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What is the output of the following enumeration code snippet?',
    code: `#include <iostream>
using namespace std;

enum Color { RED = 5, GREEN, BLUE = 10, YELLOW };

int main() {
    cout << GREEN << " " << YELLOW;
    return 0;
}`,
    options: ['6 11', '1 3', '5 10', '6 10'],
    correctAnswer: 0,
    explanation: 'RED is assigned 5, so GREEN automatically becomes 6. BLUE is assigned 10, so YELLOW automatically becomes 11. Output is "6 11".'
  },
  {
    id: 'u1s4q5',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What happens when writing to one member of a union and then immediately reading another member?',
    code: `#include <iostream>
using namespace std;

union Store {
    int a;
    float b;
};

int main() {
    Store s;
    s.a = 65;
    cout << s.a;
    return 0;
}`,
    options: [
      'Output is 65',
      'Compilation Error',
      'Always causes a memory access violation crash',
      'The values of a and b are added automatically'
    ],
    correctAnswer: 0,
    explanation: 's.a was written last, so reading s.a yields 65. If s.b were read, it would interpret the memory bytes of integer 65 as a float.'
  },
  {
    id: 'u1s4q6',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What will be the output of the struct initialization code below?',
    code: `#include <iostream>
using namespace std;

struct Student {
    int id;
    string name;
    Student(int i, string n) : id(i), name(n) {}
};

int main() {
    Student s1(101, "Alice");
    cout << s1.name << "-" << s1.id;
    return 0;
}`,
    options: ['Alice-101', '101-Alice', 'Alice', 'Compilation Error: struct cannot have constructors'],
    correctAnswer: 0,
    explanation: 'In C++, structs can have constructors, member functions, access specifiers, and inheritance. `s1` is initialized with id 101 and name "Alice", outputting "Alice-101".'
  },
  {
    id: 'u1s4q7',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What is the output of enum class (scoped enum) usage in C++11?',
    code: `#include <iostream>
using namespace std;

enum class Status { SUCCESS = 1, FAILURE = 0 };

int main() {
    Status s = Status::SUCCESS;
    if (s == Status::SUCCESS) {
        cout << "OK";
    }
    return 0;
}`,
    options: ['OK', '1', 'SUCCESS', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`enum class` creates strongly-typed scoped enums. Checking `s == Status::SUCCESS` evaluates to true, outputting "OK".'
  },
  {
    id: 'u1s4q8',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What is the result of attempting to implicitly convert an `enum class` value to an integer?',
    code: `enum class Direction { NORTH, SOUTH };
int val = Direction::NORTH; // What happens here?`,
    options: [
      'val becomes 0 silently',
      'Compilation Error: enum class prevents implicit conversion to int',
      'val becomes 1',
      'Runtime exception'
    ],
    correctAnswer: 1,
    explanation: 'Unlike traditional C-style enums, `enum class` does NOT implicitly convert to int. Explicit casting (`static_cast<int>(Direction::NORTH)`) is required.'
  },
  {
    id: 'u1s4q9',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What is the scope of a local variable declared inside an if-statement block?',
    code: `#include <iostream>
using namespace std;

int main() {
    if (true) {
        int temp = 99;
    }
    // cout << temp; // Is temp accessible here?
    return 0;
}`,
    options: [
      'Function scope (accessible anywhere in main)',
      'Block scope (accessible only inside the if-statement block)',
      'Global scope',
      'File scope'
    ],
    correctAnswer: 1,
    explanation: 'Variables declared inside `{}` braces have block scope and cease to exist outside that enclosing block.'
  },
  {
    id: 'u1s4q10',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What will be the output of nested scope resolution?',
    code: `#include <iostream>
using namespace std;

int x = 10;

int main() {
    int x = 20;
    {
        int x = 30;
        cout << x << " ";
    }
    cout << x;
    return 0;
}`,
    options: ['30 20', '30 10', '20 20', '10 10'],
    correctAnswer: 0,
    explanation: 'The inner block shadows outer variables, printing 30. Once the inner block exits, outer local x (20) is printed, resulting in "30 20".'
  },
  {
    id: 'u1s4q11',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'Which operator is used to define member functions outside the class scope?',
    code: `class Box {
public:
    void show();
};
void Box::show() {} // Which operator is ::?`,
    options: ['Scope Resolution Operator (::)', 'Ternary Operator (?:)', 'Member Selector (.)', 'Pointer to Member (.*)'],
    correctAnswer: 0,
    explanation: 'The double colon `::` is the scope resolution operator used to specify class ownership for out-of-line function definitions.'
  },
  {
    id: 'u1s4q12',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What is the output of the following C-style enum default indexing?',
    code: `#include <iostream>
using namespace std;

enum Days { SUN, MON, TUE, WED };

int main() {
    Days today = TUE;
    cout << today;
    return 0;
}`,
    options: ['0', '1', '2', '3'],
    correctAnswer: 2,
    explanation: 'By default, uninitialized C-style enums start at 0 (SUN=0, MON=1, TUE=2, WED=3). TUE prints 2.'
  },
  {
    id: 'u1s4q13',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What happens when inheritance is specified for a struct without access specifier?',
    code: `struct Base { int x; };
struct Derived : Base { int y; }; // What is inheritance type?`,
    options: ['Public inheritance by default', 'Private inheritance by default', 'Protected inheritance by default', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'For structs, default inheritance is `public`. For classes, default inheritance is `private`.'
  },
  {
    id: 'u1s4q14',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'What is the output of modifying union fields sequentially?',
    code: `#include <iostream>
using namespace std;

union TestUnion {
    int x;
    int y;
};

int main() {
    TestUnion u;
    u.x = 10;
    u.y = 25;
    cout << u.x;
    return 0;
}`,
    options: ['10', '25', '35', 'Garbage value'],
    correctAnswer: 1,
    explanation: 'Since x and y share the exact same memory location in union TestUnion, setting `u.y = 25` overwrites that location, so `u.x` reads 25.'
  },
  {
    id: 'u1s4q15',
    unitId: 'unit1',
    setId: 'u1s4',
    difficulty: 'medium',
    question: 'Can a class contain a member of its own class type directly as a value field?',
    code: `class Node {
    Node next; // Is this allowed?
};`,
    options: [
      'Yes, it creates a infinite recursive array',
      'No, because the size of Node is incomplete; it must use a pointer Node* next',
      'Yes, but only if Node is public',
      'Yes, in C++17 onwards'
    ],
    correctAnswer: 1,
    explanation: 'A class cannot contain an instance of itself as a direct value field because its size would be undefined (incomplete type). It must store a pointer (`Node *next`) or reference.'
  },

  // ==========================================
  // UNIT 1 - SET 5: Friend Functions, Overloading & Recursion (Medium - 15 Qs)
  // ==========================================
  {
    id: 'u1s5q1',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What is the output of the following friend function accessing private members?',
    code: `#include <iostream>
using namespace std;

class Secret {
    int code = 707;
    friend void reveal(Secret s);
};

void reveal(Secret s) {
    cout << s.code;
}

int main() {
    Secret sec;
    reveal(sec);
    return 0;
}`,
    options: ['707', '0', 'Compilation Error: code is private', 'Runtime Error'],
    correctAnswer: 0,
    explanation: 'A function declared as `friend` inside a class gains permission to access private and protected members of that class.'
  },
  {
    id: 'u1s5q2',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'Is friendship mutual and transitive between classes in C++?',
    code: `// Class A is friend of B. Is B automatically friend of A?`,
    options: [
      'Yes, friendship is automatically mutual and transitive',
      'No, friendship is neither mutual nor transitive unless explicitly specified',
      'Friendship is mutual, but not transitive',
      'Friendship is transitive, but not mutual'
    ],
    correctAnswer: 1,
    explanation: 'Friendship is granted, not taken. If Class A declares Class B as friend, B can access A\'s private members, but A CANNOT access B\'s private members unless B explicitly declares A as friend.'
  },
  {
    id: 'u1s5q3',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What will be the output of function overloading based on parameter types?',
    code: `#include <iostream>
using namespace std;

void show(int a) { cout << "INT "; }
void show(double a) { cout << "DOUBLE "; }

int main() {
    show(5);
    show(5.5);
    return 0;
}`,
    options: ['INT DOUBLE ', 'DOUBLE INT ', 'INT INT ', 'Compilation Error: ambiguous call'],
    correctAnswer: 0,
    explanation: 'Integer literal 5 matches `show(int)`, and float/double literal 5.5 matches `show(double)`. Output is "INT DOUBLE ".'
  },
  {
    id: 'u1s5q4',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What happens when overloading functions differing ONLY by return type?',
    code: `#include <iostream>
using namespace std;

int calc(int x) { return x; }
double calc(int x) { return x * 1.0; } // Differing only by return type

int main() {
    calc(10);
    return 0;
}`,
    options: [
      'Compiles fine and calls int version',
      'Compiles fine and calls double version',
      'Compilation Error: functions cannot be overloaded by return type alone',
      'Runtime exception'
    ],
    correctAnswer: 2,
    explanation: 'In C++, function overloading relies on parameter list signature (number, order, or types of parameters). Differing ONLY by return type causes a compilation error.'
  },
  {
    id: 'u1s5q5',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What is the output of the recursive member function calculating factorial?',
    code: `#include <iostream>
using namespace std;

class Math {
public:
    int fact(int n) {
        if (n <= 1) return 1;
        return n * fact(n - 1);
    }
};

int main() {
    Math m;
    cout << m.fact(4);
    return 0;
}`,
    options: ['24', '12', '4', 'Infinite Recursion Stack Overflow'],
    correctAnswer: 0,
    explanation: 'fact(4) evaluates 4 * fact(3) = 4 * 3 * fact(2) = 4 * 3 * 2 * 1 = 24.'
  },
  {
    id: 'u1s5q6',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What issue arises from function overloading combined with default parameters?',
    code: `#include <iostream>
using namespace std;

void printVal(int a, int b = 10) {}
void printVal(int a) {}

int main() {
    // printVal(5); // What happens here?
    return 0;
}`,
    options: [
      'Calls printVal(int a)',
      'Calls printVal(int a, int b = 10)',
      'Compilation Error: ambiguous call to overloaded function',
      'Executes both functions sequentially'
    ],
    correctAnswer: 2,
    explanation: 'Calling `printVal(5)` matches both `printVal(int)` and `printVal(int, int=10)` because the second argument has a default value, producing a compilation error due to ambiguity.'
  },
  {
    id: 'u1s5q7',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What is the output of the following friend class example?',
    code: `#include <iostream>
using namespace std;

class Alpha {
private:
    int data = 88;
    friend class Beta;
};

class Beta {
public:
    void printAlpha(Alpha a) {
        cout << a.data;
    }
};

int main() {
    Alpha a;
    Beta b;
    b.printAlpha(a);
    return 0;
}`,
    options: ['88', '0', 'Compilation Error: Beta cannot access private member of Alpha', 'Runtime Error'],
    correctAnswer: 0,
    explanation: 'Alpha explicitly declares `friend class Beta;`. Therefore, all member functions of Beta have access to Alpha\'s private data member `data`, printing 88.'
  },
  {
    id: 'u1s5q8',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What will be the output of recursive count down function?',
    code: `#include <iostream>
using namespace std;

void countdown(int n) {
    if (n == 0) return;
    cout << n << " ";
    countdown(n - 1);
}

int main() {
    countdown(3);
    return 0;
}`,
    options: ['3 2 1 ', '1 2 3 ', '3 2 1 0 ', '0 1 2 3 '],
    correctAnswer: 0,
    explanation: 'countdown(3) prints 3, calls countdown(2) which prints 2, calls countdown(1) which prints 1, calls countdown(0) which hits base condition returning, outputting "3 2 1 ".'
  },
  {
    id: 'u1s5q9',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'Where must default parameter values be declared in function signatures?',
    code: `// Which signature is valid?`,
    options: [
      'void compute(int a = 5, int b); // Default first',
      'void compute(int a, int b = 5); // Default trailing',
      'void compute(int a = 1, int b, int c = 3); // Default middle',
      'Default arguments can be placed anywhere'
    ],
    correctAnswer: 1,
    explanation: 'In C++, default arguments must be specified from right to left (trailing parameters). A parameter without a default cannot follow parameters with default values.'
  },
  {
    id: 'u1s5q10',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What is the output of the following function call sequence with reference vs default arguments?',
    code: `#include <iostream>
using namespace std;

int mult(int x, int y = 2, int z = 3) {
    return x * y * z;
}

int main() {
    cout << mult(4) << " " << mult(4, 5);
    return 0;
}`,
    options: ['24 60', '8 20', '24 20', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'mult(4) uses default y=2, z=3 -> 4 * 2 * 3 = 24. mult(4, 5) overrides y with 5, using default z=3 -> 4 * 5 * 3 = 60. Output is "24 60".'
  },
  {
    id: 'u1s5q11',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What happens if a recursive function lacks a base termination condition?',
    code: `void infiniteRec(int n) {
    infiniteRec(n + 1);
}`,
    options: [
      'Returns 0 automatically',
      'Executes indefinitely until Stack Overflow (Segmentation Fault)',
      'Compilation Error',
      'Terminates gracefully after 1000 calls'
    ],
    correctAnswer: 1,
    explanation: 'Without a base condition, the function calls itself indefinitely, consuming stack frames until call stack memory is exhausted (Stack Overflow runtime crash).'
  },
  {
    id: 'u1s5q12',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'Can a non-member global function be declared as a friend of a class?',
    code: `class Box {
    int width = 10;
    friend void printWidth(Box b);
};`,
    options: [
      'Yes, non-member functions can be friend functions',
      'No, only member functions of other classes can be friend functions',
      'Yes, but only if the function is inline',
      'No, friend keyword is restricted to classes only'
    ],
    correctAnswer: 0,
    explanation: 'A friend function can be either a global non-member function or a member function of another class.'
  },
  {
    id: 'u1s5q13',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What is the output of the recursive post-processing print order?',
    code: `#include <iostream>
using namespace std;

void printRev(int n) {
    if (n == 0) return;
    printRev(n - 1);
    cout << n << " ";
}

int main() {
    printRev(3);
    return 0;
}`,
    options: ['3 2 1 ', '1 2 3 ', '3 2 1 0 ', '0 1 2 3 '],
    correctAnswer: 1,
    explanation: 'Because cout << n occurs AFTER the recursive call `printRev(n - 1)`, unwinding the call stack prints numbers in ascending order: "1 2 3 ".'
  },
  {
    id: 'u1s5q14',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'What is the output of overloading `+` operator using friend function concept?',
    code: `#include <iostream>
using namespace std;

class Complex {
    int real;
public:
    Complex(int r) : real(r) {}
    friend int operator+(Complex c1, Complex c2) {
        return c1.real + c2.real;
    }
};

int main() {
    Complex num1(15), num2(25);
    cout << (num1 + num2);
    return 0;
}`,
    options: ['40', '1525', 'Compilation Error', '0'],
    correctAnswer: 0,
    explanation: 'Friend function `operator+` takes two Complex objects and returns the sum of their `real` members: 15 + 25 = 40.'
  },
  {
    id: 'u1s5q15',
    unitId: 'unit1',
    setId: 'u1s5',
    difficulty: 'medium',
    question: 'Which rule applies when default parameters are declared in both function declaration and definition?',
    code: `void test(int x = 10); // Declaration
void test(int x = 10) {} // Definition - Is this allowed?`,
    options: [
      'Default parameter must be specified in BOTH declaration and definition',
      'Default parameter should be specified in the declaration OR definition, but NOT BOTH',
      'Default parameter must be in definition only',
      'Causes a linker error'
    ],
    correctAnswer: 1,
    explanation: 'In C++, default arguments cannot be repeated in both the function declaration and definition. Typically, they are placed in the header/declaration only.'
  },

  // ==========================================
  // UNIT 2 - SET 1: Basic Pointers & Void Pointers (Easy - 15 Qs)
  // ==========================================
  {
    id: 'u2s1q1',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What will be the output of the following pointer dereferencing code?',
    code: `#include <iostream>
using namespace std;

int main() {
    int val = 25;
    int *ptr = &val;
    cout << *ptr;
    return 0;
}`,
    options: ['25', 'Address of val', 'Garbage value', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`ptr` stores memory address of `val`. Dereferencing `*ptr` yields the value stored at that address, which is 25.'
  },
  {
    id: 'u2s1q2',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What operator is used to obtain the memory address of a variable in C++?',
    code: `int number = 100;
// Which operator gives the address of number?`,
    options: ['* (Dereference operator)', '& (Address-of operator)', '-> (Arrow operator)', ':: (Scope operator)'],
    correctAnswer: 1,
    explanation: 'The `&` (address-of) operator retrieves the memory address where a variable is stored.'
  },
  {
    id: 'u2s1q3',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What is a Void Pointer (`void*`) in C++?',
    code: `int num = 50;
void *ptr = &num;`,
    options: [
      'A pointer that points to nothing and cannot store any address',
      'A generic pointer that can point to objects of any data type',
      'A pointer that automatically deallocates memory when out of scope',
      'A pointer restricted to void function return types'
    ],
    correctAnswer: 1,
    explanation: 'A void pointer (`void*`) is a generic pointer capable of pointing to any data type without type binding.'
  },
  {
    id: 'u2s1q4',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What is required before dereferencing a `void*` pointer in C++?',
    code: `#include <iostream>
using namespace std;

int main() {
    int num = 42;
    void *vptr = &num;
    // cout << *vptr; // Can we do this directly?
    cout << *(static_cast<int*>(vptr));
    return 0;
}`,
    options: [
      'Direct dereferencing *vptr works fine without casting',
      'Explicit type casting to a specific data pointer type (e.g., int*) before dereferencing',
      'Void pointers cannot be dereferenced under any circumstances',
      'Automatic implicitly cast by cout stream'
    ],
    correctAnswer: 1,
    explanation: 'Because a `void*` lacks data type size information, it cannot be dereferenced directly without explicit type casting (e.g. `*(int*)vptr`).'
  },
  {
    id: 'u2s1q5',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What will be the output of updating a variable through its pointer?',
    code: `#include <iostream>
using namespace std;

int main() {
    int count = 5;
    int *p = &count;
    *p = 15;
    cout << count;
    return 0;
}`,
    options: ['5', '15', 'Address of count', 'Compilation Error'],
    correctAnswer: 1,
    explanation: '`*p = 15` modifies the value at the address stored in `p` (which is `count`), changing `count` to 15.'
  },
  {
    id: 'u2s1q6',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What is the output of the array pointer indexing code below?',
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30};
    int *p = arr;
    cout << *p << " " << *(p + 1);
    return 0;
}`,
    options: ['10 20', '10 30', '20 30', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'The array name `arr` decays to pointer to first element (10). `*p` is 10, and `*(p + 1)` points to second element 20, outputting "10 20".'
  },
  {
    id: 'u2s1q7',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What is the size of a pointer variable on a 64-bit system regardless of the data type it points to?',
    code: `#include <iostream>
using namespace std;

int main() {
    char *cp;
    int *ip;
    double *dp;
    // On 64-bit OS
}`,
    options: [
      'char* is 1 byte, int* is 4 bytes, double* is 8 bytes',
      'All pointer types have the same size (8 bytes on 64-bit systems)',
      'All pointer types are 2 bytes',
      'Pointers do not occupy any memory space'
    ],
    correctAnswer: 1,
    explanation: 'Pointers store memory addresses. On a 64-bit architecture, memory addresses are 64 bits (8 bytes) long for ALL data types.'
  },
  {
    id: 'u2s1q8',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What will be the output of the code snippet assigning pointer to pointer?',
    code: `#include <iostream>
using namespace std;

int main() {
    int a = 7;
    int *p1 = &a;
    int *p2 = p1;
    *p2 = 14;
    cout << a;
    return 0;
}`,
    options: ['7', '14', 'Garbage value', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'p2 gets a copy of address stored in p1 (address of a). Modifying `*p2 = 14` alters `a` to 14.'
  },
  {
    id: 'u2s1q9',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'Which keyword in C++11 represents a type-safe null pointer?',
    code: `int *ptr = ______; // Modern C++ null pointer`,
    options: ['NULL', '0', 'nullptr', 'NIL'],
    correctAnswer: 2,
    explanation: '`nullptr` was introduced in C++11 as a literal type-safe null pointer of type `std::nullptr_t`.'
  },
  {
    id: 'u2s1q10',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What is the output of the character pointer code below?',
    code: `#include <iostream>
using namespace std;

int main() {
    char str[] = "C++";
    char *ptr = str;
    cout << ptr;
    return 0;
}`,
    options: ['C++', 'Address of str', 'C', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`cout` overloads `operator<<` for `char*` to print the null-terminated C-string content ("C++") rather than its address.'
  },
  {
    id: 'u2s1q11',
    unitId: 'unit1',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What will happen when trying to perform arithmetic directly on a `void*` pointer in standard C++?',
    code: `void *vptr = &someVar;
vptr++; // Is void pointer arithmetic allowed in ISO C++?`,
    options: [
      'Increments by 1 byte',
      'ISO C++ standard forbids pointer arithmetic on void* because sizeof(void) is incomplete',
      'Increments by 4 bytes automatically',
      'Compiles and doubles the memory address'
    ],
    correctAnswer: 1,
    explanation: 'In standard ISO C++, arithmetic on `void*` is illegal because `void` has no type size (`sizeof(void)` is incomplete).'
  },
  {
    id: 'u2s1q12',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What will be printed by the following pointer code?',
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[3] = {5, 15, 25};
    cout << *(arr + 2);
    return 0;
}`,
    options: ['5', '15', '25', 'Address of arr[2]'],
    correctAnswer: 2,
    explanation: '`*(arr + 2)` is equivalent to `arr[2]`, which accesses the third element 25.'
  },
  {
    id: 'u2s1q13',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'Which syntax correctly declares a pointer `ptr` to a `double` variable?',
    code: `double temp = 98.6;`,
    options: ['double *ptr = &temp;', 'double ptr = *temp;', 'double &ptr = temp;', 'pointer<double> ptr = &temp;'],
    correctAnswer: 0,
    explanation: '`double *ptr = &temp;` declares a pointer `ptr` to a `double` and assigns it the address of `temp`.'
  },
  {
    id: 'u2s1q14',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What will be the value of `x` after the following operations?',
    code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int *p = &x;
    *p += 5;
    cout << x;
    return 0;
}`,
    options: ['10', '15', '5', 'Compilation Error'],
    correctAnswer: 1,
    explanation: '`*p += 5` adds 5 to the variable pointed to by `p` (`x`), resulting in 15.'
  },
  {
    id: 'u2s1q15',
    unitId: 'unit2',
    setId: 'u2s1',
    difficulty: 'easy',
    question: 'What does an uninitialized pointer point to by default inside a local function scope?',
    code: `void test() {
    int *ptr; // Uninitialized local pointer
}`,
    options: [
      'Points to NULL / nullptr automatically',
      'Contains a random garbage memory address (Wild Pointer)',
      'Points to address 0x000000',
      'Causes immediate compilation error'
    ],
    correctAnswer: 1,
    explanation: 'An uninitialized local pointer contains arbitrary garbage memory address, creating a dangerous Wild Pointer.'
  },

  // ==========================================
  // UNIT 2 - SET 2: Pointer Arithmetic & Basic Strings (Easy - 15 Qs)
  // ==========================================
  {
    id: 'u2s2q1',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'Given an integer pointer `ptr` at memory address `1000` (assuming 4-byte integers), what will be `ptr + 1`?',
    code: `int *ptr = (int*)1000;
ptr = ptr + 1; // What address does ptr store now?`,
    options: ['1001', '1002', '1004', '1008'],
    correctAnswer: 2,
    explanation: 'Pointer arithmetic scales by `sizeof(type)`. For a 4-byte `int`, adding 1 advances the pointer by 4 bytes: 1000 + (1 * 4) = 1004.'
  },
  {
    id: 'u2s2q2',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What will be the output of the post-increment pointer dereference `*p++`?',
    code: `#include <iostream>
using namespace std;

int main() {
    int nums[] = {10, 20, 30};
    int *p = nums;
    cout << *p++ << " " << *p;
    return 0;
}`,
    options: ['10 20', '20 20', '10 10', '20 30'],
    correctAnswer: 0,
    explanation: '`*p++` evaluates `*p` first (10) and then increments pointer `p` to point to 20. The subsequent `*p` prints 20, yielding "10 20".'
  },
  {
    id: 'u2s2q3',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What will be the output of `std::string::length()` and `size()` for the string object below?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello C++";
    cout << str.length() << " " << str.size();
    return 0;
}`,
    options: ['9 9', '10 10', '9 10', '8 8'],
    correctAnswer: 0,
    explanation: '"Hello C++" contains 9 characters (5 letters + 1 space + 3 chars). Both `length()` and `size()` return 9.'
  },
  {
    id: 'u2s2q4',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the output of string concatenation using operator `+`?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Data";
    string s2 = "Structures";
    string s3 = s1 + " " + s2;
    cout << s3;
    return 0;
}`,
    options: ['DataStructures', 'Data Structures', 'Data+Structures', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'The `+` operator concatenates C++ string objects, resulting in "Data Structures".'
  },
  {
    id: 'u2s2q5',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the result of subtracting two pointers pointing to elements in the same array?',
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *p1 = &arr[1];
    int *p2 = &arr[4];
    cout << p2 - p1;
    return 0;
}`,
    options: ['3', '12', '4', '10'],
    correctAnswer: 0,
    explanation: 'Subtracting two pointers to the same array yields the number of elements between them (index 4 - index 1 = 3 elements).'
  },
  {
    id: 'u2s2q6',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the output of `std::string::append()` function?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string greeting = "Good";
    greeting.append(" Morning");
    cout << greeting;
    return 0;
}`,
    options: ['Good Morning', 'Good', 'Morning', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`append()` modifies the string object by attaching " Morning" to the end of "Good", yielding "Good Morning".'
  },
  {
    id: 'u2s2q7',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the output of `(*p)++` vs `*p++`?',
    code: `#include <iostream>
using namespace std;

int main() {
    int val = 5;
    int *p = &val;
    (*p)++;
    cout << val;
    return 0;
}`,
    options: ['5', '6', 'Address of val', 'Compilation Error'],
    correctAnswer: 1,
    explanation: 'Parentheses `(*p)++` prioritize dereferencing `p` (which is `val`) and then incrementing the integer value from 5 to 6.'
  },
  {
    id: 'u2s2q8',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'Which method converts a C++ `std::string` object into a null-terminated C-style character array `const char*`?',
    code: `string str = "CPP";
// Which method returns const char*?`,
    options: ['str.c_str()', 'str.toChar()', 'str.cstr()', 'str.getArray()'],
    correctAnswer: 0,
    explanation: '`str.c_str()` returns a pointer to a null-terminated array of characters representing the current string content.'
  },
  {
    id: 'u2s2q9',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the output of string element access using bracket operator `[]` vs `at()` method?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string word = "CODE";
    cout << word[1] << " " << word.at(3);
    return 0;
}`,
    options: ['O E', 'C D', 'O D', 'C E'],
    correctAnswer: 0,
    explanation: 'word[1] accesses character at index 1 (\'O\'). word.at(3) accesses character at index 3 (\'E\'). Output is "O E".'
  },
  {
    id: 'u2s2q10',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What happens if pointer comparison operators (`<`, `>`, `==`) are used between two pointers?',
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3};
    int *p1 = &arr[0];
    int *p2 = &arr[2];
    if (p1 < p2) cout << "p1 is lower address";
    return 0;
}`,
    options: [
      'Prints "p1 is lower address"',
      'Compares the values stored at the pointers (1 < 3)',
      'Compilation Error',
      'Runtime Crash'
    ],
    correctAnswer: 0,
    explanation: 'Comparing pointers compares their underlying memory addresses. Since &arr[0] precedes &arr[2] in contiguous memory, p1 < p2 is true.'
  },
  {
    id: 'u2s2q11',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the output of the string `substr()` member function?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Programming";
    cout << str.substr(3, 4);
    return 0;
}`,
    options: ['gram', 'prog', 'ming', 'ramm'],
    correctAnswer: 0,
    explanation: '`str.substr(pos, len)` extracts `len` characters starting at index `pos`. Starting at index 3 (\'g\') for 4 chars yields "gram".'
  },
  {
    id: 'u2s2q12',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'Which of the following is NOT a valid pointer arithmetic operation in C++?',
    code: `int *p1, *p2;`,
    options: [
      'Adding an integer to a pointer (p1 + 2)',
      'Subtracting an integer from a pointer (p1 - 3)',
      'Adding two pointers together (p1 + p2)',
      'Subtracting one pointer from another (p2 - p1)'
    ],
    correctAnswer: 2,
    explanation: 'Adding two memory addresses together (`p1 + p2`) is meaningless in memory management and illegal in C++.'
  },
  {
    id: 'u2s2q13',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the output of clearing a string object with `clear()`?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "Active";
    text.clear();
    cout << text.empty() << " " << text.length();
    return 0;
}`,
    options: ['1 0', '0 6', '0 0', '1 6'],
    correctAnswer: 0,
    explanation: '`clear()` removes all characters from the string. `empty()` returns true (1) and `length()` returns 0.'
  },
  {
    id: 'u2s2q14',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the output of prefix decrement on pointer dereferencing `*--ptr`?',
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {100, 200, 300};
    int *ptr = &arr[2];
    cout << *--ptr;
    return 0;
}`,
    options: ['200', '300', '100', '299'],
    correctAnswer: 0,
    explanation: '`--ptr` first decrements pointer `ptr` from pointing to arr[2] (300) to arr[1] (200), and then dereferences it, outputting 200.'
  },
  {
    id: 'u2s2q15',
    unitId: 'unit2',
    setId: 'u2s2',
    difficulty: 'easy',
    question: 'What is the primary difference between a reference variable and a pointer variable in C++?',
    code: `int x = 10;
int *p = &x; // Pointer
int &r = x;  // Reference`,
    options: [
      'Pointers can be NULL and can be reassigned; References cannot be NULL and cannot be reassigned once bound',
      'References consume 8 bytes of extra memory on stack',
      'Pointers do not support arithmetic',
      'References require explicit dereference operators (*r)'
    ],
    correctAnswer: 0,
    explanation: 'Pointers can store nullptr and be reassigned to point elsewhere. References must be bound upon creation, cannot be NULL, and cannot be re-bound.'
  },

  // ==========================================
  // UNIT 2 - SET 3: Pointer to Pointer & Memory Pitfalls (Medium - 15 Qs)
  // ==========================================
  {
    id: 'u2s3q1',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What will be the output of the following pointer to pointer (`**`) dereferencing code?',
    code: `#include <iostream>
using namespace std;

int main() {
    int n = 500;
    int *p1 = &n;
    int **p2 = &p1;
    cout << **p2;
    return 0;
}`,
    options: ['500', 'Address of n', 'Address of p1', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`p2` points to `p1`, which points to `n`. Dereferencing twice `**p2` fetches the value of `n` (500).'
  },
  {
    id: 'u2s3q2',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What is a Dangling Pointer in C++?',
    code: `int* getPtr() {
    int x = 10;
    return &x; // Returning address of local stack variable
}`,
    options: [
      'A pointer that points to a memory location that has been deallocated or freed',
      'A pointer that has never been initialized to any memory address',
      'A pointer pointing to a const variable',
      'A pointer assigned to nullptr'
    ],
    correctAnswer: 0,
    explanation: 'A dangling pointer references memory that has been deleted or went out of scope (like local variable `x` after `getPtr()` returns).'
  },
  {
    id: 'u2s3q3',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What will happen when executing the following code accessing a Dangling Pointer?',
    code: `#include <iostream>
using namespace std;

int* createInt() {
    int val = 99;
    return &val;
}

int main() {
    int *ptr = createInt();
    // cout << *ptr; // Undefined Behavior!
    return 0;
}`,
    options: [
      'Always prints 99 reliably',
      'Undefined Behavior (Accessing out-of-scope stack memory)',
      'Compilation error',
      'Automatically extends the lifetime of val'
    ],
    correctAnswer: 1,
    explanation: '`val` is destroyed when `createInt()` returns. Dereferencing `ptr` accesses invalid stack memory, causing Undefined Behavior.'
  },
  {
    id: 'u2s3q4',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What is a Wild Pointer in C++?',
    code: `int main() {
    int *ptr; // Wild pointer!
    *ptr = 100; // Dangerous!
}`,
    options: [
      'An uninitialized pointer that contains a random garbage memory address',
      'A pointer pointing to dynamically allocated heap memory',
      'A void pointer',
      'A pointer to a function'
    ],
    correctAnswer: 0,
    explanation: 'A Wild Pointer is an uninitialized pointer that points to an arbitrary, unknown memory location.'
  },
  {
    id: 'u2s3q5',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What happens when dereferencing and assigning to a NULL pointer (Null Pointer Assignment)?',
    code: `#include <iostream>
using namespace std;

int main() {
    int *p = NULL;
    *p = 50; // Dereferencing NULL!
    return 0;
}`,
    options: [
      'Allocates memory automatically',
      'Runtime Segmentation Fault / Access Violation Crash',
      'Prints 0',
      'Compilation Error'
    ],
    correctAnswer: 1,
    explanation: 'Dereferencing a NULL / nullptr attempts to read/write memory address 0x0, triggering an immediate OS Segmentation Fault / Crash.'
  },
  {
    id: 'u2s3q6',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What will be the output of modifying value via double pointer `**p2`?',
    code: `#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int *p1 = &num;
    int **p2 = &p1;
    **p2 = 80;
    cout << num;
    return 0;
}`,
    options: ['10', '80', 'Garbage value', 'Compilation Error'],
    correctAnswer: 1,
    explanation: '`**p2 = 80` dereferences `p2` to get `p1`, then dereferences `p1` to set `num` to 80.'
  },
  {
    id: 'u2s3q7',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'How can a developer prevent a pointer from becoming a Dangling Pointer after deleting dynamic memory?',
    code: `int *ptr = new int(42);
delete ptr;
ptr = ______; // Best practice safe line`,
    options: ['nullptr', 'new int(0)', '&ptr', 'delete ptr'],
    correctAnswer: 0,
    explanation: 'Setting `ptr = nullptr;` immediately after `delete ptr;` ensures the pointer no longer references freed memory, preventing dangling pointer defects.'
  },
  {
    id: 'u2s3q8',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What is the output of pointer pointer manipulation code below?',
    code: `#include <iostream>
using namespace std;

int main() {
    int a = 1, b = 2;
    int *p = &a;
    int **pp = &p;
    *pp = &b;
    **pp = 99;
    cout << a << " " << b;
    return 0;
}`,
    options: ['1 99', '99 2', '99 99', '1 2'],
    correctAnswer: 0,
    explanation: '`*pp = &b` changes `p` to point to `b`. Then `**pp = 99` updates `b` to 99. `a` remains untouched (1), printing "1 99".'
  },
  {
    id: 'u2s3q9',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'Which syntax correctly declares a pointer to a pointer to an integer?',
    code: `// Pointer to pointer syntax`,
    options: ['int **ptr;', 'int *&ptr;', 'int ptr**;', 'pointer<pointer<int>> ptr;'],
    correctAnswer: 0,
    explanation: '`int **ptr;` declares a double pointer capable of storing the memory address of an `int*` pointer.'
  },
  {
    id: 'u2s3q10',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What will be the output of the following triple pointer code?',
    code: `#include <iostream>
using namespace std;

int main() {
    int val = 7;
    int *p1 = &val;
    int **p2 = &p1;
    int ***p3 = &p2;
    cout << ***p3;
    return 0;
}`,
    options: ['7', 'Address of val', 'Address of p2', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`***p3` dereferences three levels of indirection (p3 -> p2 -> p1 -> val), successfully outputting 7.'
  },
  {
    id: 'u2s3q11',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What memory bug occurs when dynamic memory is allocated using `new` but never released with `delete`?',
    code: `void leak() {
    int *p = new int[1000];
    // Forgot delete[] p;
}`,
    options: ['Memory Leak', 'Stack Overflow', 'Segmentation Fault', 'Buffer Overflow'],
    correctAnswer: 0,
    explanation: 'Allocating heap memory without freeing it causes a Memory Leak, continuously consuming system memory until exhaustion.'
  },
  {
    id: 'u2s3q12',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What happens when calling `delete` on a `nullptr` in C++?',
    code: `#include <iostream>
using namespace std;

int main() {
    int *p = nullptr;
    delete p; // Safe or Crash?
    cout << "Safe";
    return 0;
}`,
    options: [
      'Prints "Safe" (Deleting nullptr is guaranteed to be a safe no-op)',
      'Segmentation Fault crash',
      'Compilation Error',
      'Undefined behavior'
    ],
    correctAnswer: 0,
    explanation: 'The C++ standard explicitly guarantees that calling `delete` or `delete[]` on a `nullptr` is completely safe and performs no operation (no-op).'
  },
  {
    id: 'u2s3q13',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What is the output of pointer re-assignment across double pointer?',
    code: `#include <iostream>
using namespace std;

int main() {
    int x = 5, y = 10;
    int *px = &x, *py = &y;
    int **pp = &px;
    *pp = py;
    cout << **pp;
    return 0;
}`,
    options: ['5', '10', 'Garbage value', 'Compilation Error'],
    correctAnswer: 1,
    explanation: '`*pp = py` re-assigns pointer `px` to store the address of `y`. Dereferencing `**pp` now accesses `y` (10).'
  },
  {
    id: 'u2s3q14',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What is the danger of performing `delete ptr;` TWICE on the same non-null pointer (Double Free)?',
    code: `int *ptr = new int(10);
delete ptr;
delete ptr; // Double Free!`,
    options: [
      'Undefined Behavior / Heap Corruption crash',
      'Safely ignored by compiler',
      'Re-allocates memory',
      'Compilation error'
    ],
    correctAnswer: 0,
    explanation: 'Double Free corrupts heap allocator metadata, leading to security vulnerabilities or immediate crash due to Undefined Behavior.'
  },
  {
    id: 'u2s3q15',
    unitId: 'unit2',
    setId: 'u2s3',
    difficulty: 'medium',
    question: 'What will be the output of the code snippet below?',
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30};
    int *ptr = arr;
    int **pptr = &ptr;
    cout << **pptr + 5;
    return 0;
}`,
    options: ['15', '25', '35', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`**pptr` evaluates `*ptr` which is `arr[0]` (10). Adding 5 yields 10 + 5 = 15.'
  },

  // ==========================================
  // UNIT 2 - SET 4: Pointers in Classes & "this" Pointer (Medium - 15 Qs)
  // ==========================================
  {
    id: 'u2s4q1',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What is the implicit `this` pointer inside a C++ non-static member function?',
    code: `class Sample {
    int val;
public:
    void setVal(int v) {
        this->val = v; // What is "this"?
    }
};`,
    options: [
      'A pointer holding the address of the current object invoking the member function',
      'A reference to the base class',
      'A global static pointer shared across all objects',
      'A pointer pointing to main()'
    ],
    correctAnswer: 0,
    explanation: '`this` is a constant pointer passed implicitly to all non-static member functions, holding the memory address of the invoking object.'
  },
  {
    id: 'u2s4q2',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What is the output of method chaining enabled by returning `*this` from member functions?',
    code: `#include <iostream>
using namespace std;

class Calc {
    int val = 0;
public:
    Calc& add(int n) { val += n; return *this; }
    Calc& mult(int n) { val *= n; return *this; }
    void show() { cout << val; }
};

int main() {
    Calc c;
    c.add(5).mult(3).show();
    return 0;
}`,
    options: ['15', '5', '0', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`add(5)` updates val to 5 and returns reference to current object `*this`. Method chaining calls `mult(3)` which updates val to 15, printing 15.'
  },
  {
    id: 'u2s4q3',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What will be the output of creating an Array of Objects in C++?',
    code: `#include <iostream>
using namespace std;

class Item {
public:
    int id;
    Item() { id = 1; }
};

int main() {
    Item items[3];
    items[1].id = 99;
    cout << items[0].id << " " << items[1].id << " " << items[2].id;
    return 0;
}`,
    options: ['1 99 1', '1 1 1', '99 99 99', 'Compilation Error'],
    correctAnswer: 0,
    explanation: 'Creating `Item items[3]` calls default constructor for all 3 elements (id=1). Updating items[1].id to 99 outputs "1 99 1".'
  },
  {
    id: 'u2s4q4',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What operator is used to access class members when using a pointer to an object (`Object* ptr`)?',
    code: `#include <iostream>
using namespace std;

class Student {
public:
    int age = 20;
};

int main() {
    Student s;
    Student *ptr = &s;
    // How to access age using ptr?
    cout << ptr____age;
    return 0;
}`,
    options: ['-> (Arrow operator)', '. (Dot operator)', ':: (Scope operator)', '.* (Pointer to member operator)'],
    correctAnswer: 0,
    explanation: 'The arrow operator `->` dereferences the object pointer and accesses its member variable or function (`ptr->age`).'
  },
  {
    id: 'u2s4q5',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What serious issue occurs in a class containing raw pointers when using default shallow copy constructor?',
    code: `class Buffer {
    int *data;
public:
    Buffer(int size) { data = new int[size]; }
    ~Buffer() { delete[] data; }
};`,
    options: [
      'Both objects share the same heap memory, leading to Double Free crash upon destruction',
      'Deep copy is automatically performed by compiler',
      'Causes immediate compilation error',
      'The pointer is automatically converted to std::vector'
    ],
    correctAnswer: 0,
    explanation: 'Default copy constructor performs shallow copy (bitwise copy of pointer address). When both objects go out of scope, their destructors run `delete[] data` on the same address, causing a Double Free crash.'
  },
  {
    id: 'u2s4q6',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What is the output of resolving shadow member variable names using `this` pointer?',
    code: `#include <iostream>
using namespace std;

class Point {
    int x;
public:
    Point(int x) {
        this->x = x;
    }
    void print() { cout << x; }
};

int main() {
    Point p(45);
    p.print();
    return 0;
}`,
    options: ['45', '0', 'Garbage value', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`this->x = x` distinguishes member variable `x` from parameter `x`, correctly assigning 45.'
  },
  {
    id: 'u2s4q7',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What is the output of invoking member functions through dynamic object allocation with `new`?',
    code: `#include <iostream>
using namespace std;

class Node {
public:
    int val;
    Node(int v) : val(v) {}
};

int main() {
    Node *n = new Node(77);
    cout << n->val;
    delete n;
    return 0;
}`,
    options: ['77', '0', 'Address of n', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`new Node(77)` dynamically allocates Node on heap, returning `Node*`. Accessing `n->val` yields 77.'
  },
  {
    id: 'u2s4q8',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What constructor must be explicitly implemented to avoid shallow copy bugs in classes containing pointers?',
    code: `// Rule of Three in C++`,
    options: ['Deep Copy Constructor and Copy Assignment Operator', 'Default Parameter Constructor', 'Static Constructor', 'Virtual Constructor'],
    correctAnswer: 0,
    explanation: 'Implementing a custom Deep Copy Constructor allocates separate memory for the copy, eliminating shared pointer bugs.'
  },
  {
    id: 'u2s4q9',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What will be the output of iterating over an array of object pointers?',
    code: `#include <iostream>
using namespace std;

class Base {
public:
    int num;
    Base(int n) : num(n) {}
};

int main() {
    Base* arr[2] = { new Base(10), new Base(20) };
    cout << arr[0]->num + arr[1]->num;
    delete arr[0];
    delete arr[1];
    return 0;
}`,
    options: ['30', '10', '20', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`arr[0]->num` is 10 and `arr[1]->num` is 20. Their sum is 30.'
  },
  {
    id: 'u2s4q10',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What type is the `this` pointer inside a `const` member function of class `Sample`?',
    code: `class Sample {
    void display() const {
        // What is the exact type of "this" here?
    }
};`,
    options: [
      'const Sample* const (pointer to constant object)',
      'Sample* const (constant pointer to non-const object)',
      'Sample*',
      'const Sample&'
    ],
    correctAnswer: 0,
    explanation: 'Inside a `const` member function, `this` is of type `const Sample* const` (a constant pointer to a constant object), preventing modifications to member fields.'
  },
  {
    id: 'u2s4q11',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What will be the output of the destructor call order on an array of objects allocated on stack?',
    code: `#include <iostream>
using namespace std;

class Tracker {
    int id;
public:
    Tracker(int i) : id(i) {}
    ~Tracker() { cout << id << " "; }
};

int main() {
    Tracker t[2] = { Tracker(1), Tracker(2) };
    return 0;
}`,
    options: ['2 1 ', '1 2 ', '1 1 ', '2 2 '],
    correctAnswer: 0,
    explanation: 'Objects in stack arrays are constructed in forward order (1, 2) and destroyed in REVERSE order when going out of scope, outputting "2 1 ".'
  },
  {
    id: 'u2s4q12',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'Can `this` pointer be modified inside a member function (e.g. `this = nullptr;`)?',
    code: `void reset() {
    // this = nullptr; // Is this valid?
}`,
    options: [
      'No, "this" is an rvalue constant pointer and cannot be assigned to',
      'Yes, it deletes the object automatically',
      'Yes, but only in non-const functions',
      'Yes, in C++20'
    ],
    correctAnswer: 0,
    explanation: '`this` is an immutable non-lvalue pointer. Assigning to `this` causes a compilation error.'
  },
  {
    id: 'u2s4q13',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What is the output of accessing static members through an object pointer (`ptr->staticMember`)?',
    code: `#include <iostream>
using namespace std;

class Stat {
public:
    static int code;
};
int Stat::code = 55;

int main() {
    Stat *ptr = nullptr;
    cout << ptr->code;
    return 0;
}`,
    options: [
      '55 (Static members do not require dereferencing a valid instance address)',
      'Segmentation Fault crash',
      'Compilation error',
      'Garbage value'
    ],
    correctAnswer: 0,
    explanation: 'Even though `ptr` is `nullptr`, accessing static members via `ptr->code` evaluates `Stat::code` (55) at compile time without dereferencing `ptr`.'
  },
  {
    id: 'u2s4q14',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What will be the output of explicit placement `this` check?',
    code: `#include <iostream>
using namespace std;

class Demo {
public:
    bool isSame(Demo *other) {
        return this == other;
    }
};

int main() {
    Demo d1, d2;
    cout << d1.isSame(&d1) << " " << d1.isSame(&d2);
    return 0;
}`,
    options: ['1 0', '0 1', '1 1', '0 0'],
    correctAnswer: 0,
    explanation: '`d1.isSame(&d1)` compares `this` (&d1) with &d1, returning true (1). `d1.isSame(&d2)` compares &d1 with &d2, returning false (0). Output is "1 0".'
  },
  {
    id: 'u2s4q15',
    unitId: 'unit2',
    setId: 'u2s4',
    difficulty: 'medium',
    question: 'What is the correct syntax for invoking a member function using an object pointer `p`?',
    code: `Sample *p = new Sample();
// Which call is valid?`,
    options: ['p->display();', '(*p).display();', 'Both p->display() and (*p).display() are valid', 'p.display();'],
    correctAnswer: 2,
    explanation: 'Both `p->display()` and dereferenced dot syntax `(*p).display()` are valid ways to invoke member functions through a pointer.'
  },

  // ==========================================
  // UNIT 2 - SET 5: Multidimensional Arrays, String Modifiers & Data Member Pointers (Medium - 15 Qs)
  // ==========================================
  {
    id: 'u2s5q1',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What is the syntax to declare a Pointer to a Data Member `int val` of class `Test`?',
    code: `class Test {
public:
    int val;
};
// Syntax for pointer to data member:`,
    options: ['int Test::*ptr = &Test::val;', 'int *Test::ptr = &Test::val;', 'Test::int *ptr = &val;', 'int *ptr = &Test::val;'],
    correctAnswer: 0,
    explanation: 'Pointer to a data member of class `Test` is declared as `int Test::*ptr = &Test::val;`.'
  },
  {
    id: 'u2s5q2',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What operator is used to dereference a Pointer to Data Member using an object instance `obj`?',
    code: `#include <iostream>
using namespace std;

class Sample {
public:
    int data = 123;
};

int main() {
    Sample obj;
    int Sample::*p = &Sample::data;
    // Access data using obj and p:
    cout << obj.*p;
    return 0;
}`,
    options: ['.* operator', '->* operator', ':: operator', '-> operator'],
    correctAnswer: 0,
    explanation: 'The `.*` operator is the pointer-to-member selector used with an object instance (`obj.*p`).'
  },
  {
    id: 'u2s5q3',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What operator is used to dereference a Pointer to Data Member using an Object Pointer `objPtr`?',
    code: `#include <iostream>
using namespace std;

class Sample {
public:
    int data = 456;
};

int main() {
    Sample *objPtr = new Sample();
    int Sample::*p = &Sample::data;
    cout << objPtr->*p;
    delete objPtr;
    return 0;
}`,
    options: ['->* operator', '.* operator', '-> operator', ':: operator'],
    correctAnswer: 0,
    explanation: 'The `->*` operator is used to access a class data member through an object pointer (`objPtr->*p`).'
  },
  {
    id: 'u2s5q4',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What will be the output of processing a 2D multidimensional array inside a class?',
    code: `#include <iostream>
using namespace std;

class Matrix {
public:
    int mat[2][2] = {{1, 2}, {3, 4}};
    int getSum() {
        int sum = 0;
        for(int i=0; i<2; i++)
            for(int j=0; j<2; j++)
                sum += mat[i][j];
        return sum;
    }
};

int main() {
    Matrix m;
    cout << m.getSum();
    return 0;
}`,
    options: ['10', '4', '6', '12'],
    correctAnswer: 0,
    explanation: 'The 2D matrix sum is 1 + 2 + 3 + 4 = 10.'
  },
  {
    id: 'u2s5q5',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What is the output of `std::string::replace()` modifier function?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "I like Java programming";
    str.replace(7, 4, "C++");
    cout << str;
    return 0;
}`,
    options: ['I like C++ programming', 'I like Java C++', 'C++ programming', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`str.replace(pos, len, newStr)` replaces 4 characters starting at index 7 ("Java") with "C++", resulting in "I like C++ programming".'
  },
  {
    id: 'u2s5q6',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What is the output of 2D array pointer offset calculation `*(*(arr + i) + j)`?',
    code: `#include <iostream>
using namespace std;

int main() {
    int arr[2][3] = {{10, 20, 30}, {40, 50, 60}};
    cout << *(*(arr + 1) + 2);
    return 0;
}`,
    options: ['60', '50', '30', '40'],
    correctAnswer: 0,
    explanation: '`*(*(arr + 1) + 2)` is equivalent to `arr[1][2]`, which accesses row 1, column 2 (value 60).'
  },
  {
    id: 'u2s5q7',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What will `std::string::find()` return if the target substring is NOT found?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Master C++";
    if (str.find("Python") == string::npos) {
        cout << "Not Found";
    }
    return 0;
}`,
    options: ['Not Found', '-1', '0', 'NullPointerException'],
    correctAnswer: 0,
    explanation: 'When target substring is absent, `find()` returns `string::npos` (a special static constant representing maximum unsigned size_t value).'
  },
  {
    id: 'u2s5q8',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What is the output of `std::string::erase()` modifier function?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "HelloWorld";
    text.erase(5, 5);
    cout << text;
    return 0;
}`,
    options: ['Hello', 'World', 'HelloWorld', 'Empty string'],
    correctAnswer: 0,
    explanation: '`erase(5, 5)` removes 5 characters starting from index 5 ("World"), leaving "Hello".'
  },
  {
    id: 'u2s5q9',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'How is a 2D array passed to a function in C++ main scope?',
    code: `// Which function parameter signature for passing 2D array is valid?`,
    options: [
      'void process(int arr[][3], int rows)',
      'void process(int arr[][], int rows)',
      'void process(int arr[3][])',
      'void process(int [][]arr)'
    ],
    correctAnswer: 0,
    explanation: 'When passing multidimensional arrays, all dimension sizes EXCEPT the first must be explicitly specified (e.g. `int arr[][3]`) so compiler can compute row offsets.'
  },
  {
    id: 'u2s5q10',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What is the output of pointer to member function execution?',
    code: `#include <iostream>
using namespace std;

class Calculator {
public:
    int mult(int a, int b) { return a * b; }
};

int main() {
    Calculator c;
    int (Calculator::*pFunc)(int, int) = &Calculator::mult;
    cout << (c.*pFunc)(4, 5);
    return 0;
}`,
    options: ['20', '9', '0', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`pFunc` is a pointer to member function `mult`. Invoking `(c.*pFunc)(4, 5)` returns 4 * 5 = 20.'
  },
  {
    id: 'u2s5q11',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What is the output of `std::string::insert()` member modifier?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "C Quiz";
    s.insert(1, "++");
    cout << s;
    return 0;
}`,
    options: ['C++ Quiz', 'C Quiz++', 'C++Quiz', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`s.insert(1, "++")` inserts "++" at index position 1, transforming "C Quiz" into "C++ Quiz".'
  },
  {
    id: 'u2s5q12',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'In a 2D array `int grid[3][4]`, what is the type of `grid[0]`?',
    code: `int grid[3][4];
// What is the type of grid[0]?`,
    options: ['int* (Pointer to an array of 4 integers)', 'int (Single integer)', 'int** (Double pointer)', 'int[][4]'],
    correctAnswer: 0,
    explanation: '`grid[0]` decays to a pointer to the first element of row 0 (`int*`), pointing to `&grid[0][0]`.'
  },
  {
    id: 'u2s5q13',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What will be the output of string comparison using `compare()` method?',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str1 = "Apple";
    string str2 = "Banana";
    if (str1.compare(str2) < 0) {
        cout << "Lexicographically Smaller";
    }
    return 0;
}`,
    options: ['Lexicographically Smaller', 'Equal', 'Greater', 'Compilation Error'],
    correctAnswer: 0,
    explanation: '`str1.compare(str2)` compares ASCII values. Since "Apple" comes before "Banana" alphabetically, it returns a negative value (< 0).'
  },
  {
    id: 'u2s5q14',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What is the output of pointer to private member access via friend function?',
    code: `#include <iostream>
using namespace std;

class Vault {
    int key = 999;
public:
    friend int getKey(Vault v);
};

int getKey(Vault v) {
    int Vault::*p = &Vault::key;
    return v.*p;
}

int main() {
    Vault v;
    cout << getKey(v);
    return 0;
}`,
    options: ['999', '0', 'Compilation Error: key is private', 'Runtime crash'],
    correctAnswer: 0,
    explanation: 'Because `getKey` is a friend function, taking a pointer to private data member `&Vault::key` is permitted inside `getKey`, returning 999.'
  },
  {
    id: 'u2s5q15',
    unitId: 'unit2',
    setId: 'u2s5',
    difficulty: 'medium',
    question: 'What is the size in bytes of 3D array `int arr[2][3][4]` assuming 4-byte integers?',
    code: `int arr[2][3][4]; // Total elements = 2 * 3 * 4 = 24`,
    options: ['96 bytes', '24 bytes', '48 bytes', '192 bytes'],
    correctAnswer: 0,
    explanation: 'Total elements = 2 * 3 * 4 = 24 integers. Total memory size = 24 * 4 bytes = 96 bytes.'
  }
];
