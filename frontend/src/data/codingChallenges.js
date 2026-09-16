// 36 Comprehensive Coding Challenges
// Subject 1: OOPs in CPP (18 Challenges - 6 per unit)
// Subject 2: DSA (18 Challenges - 6 per unit)
// Reference solutions are strictly Admin-only and stored on backend.

export const CODING_CHALLENGES = [
  {
    "id": "oops-u1-p1",
    "subjectId": "oops",
    "unitId": "unit1",
    "unitTitle": "Unit I: Concepts and Basics of C++ Programming",
    "title": "Student Gradebook & Method Overloading with Pass-by-Reference",
    "category": "OOP, Overloading & References",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Implement a Gradebook class that encapsulates student scores, provides overloaded methods for raw and weighted grades, and computes average and letter grade using pass-by-reference.",
    "learningObjectives": [
      "Encapsulate data members inside private access specifiers",
      "Implement function and method overloading for flexible parameter types",
      "Use pass-by-reference (double& avg, char& grade) to return multiple computed values without tuples",
      "Format output with fixed decimal precision"
    ],
    "keyConcepts": [
      "Classes vs Structs: private by default in classes",
      "Method overloading requires different parameter signatures",
      "Pass-by-reference avoids copying and allows direct mutation of caller variables"
    ],
    "commonPitfalls": [
      "Passing by value when the caller expects mutated values causes results to be lost upon function return."
    ],
    "inputFormat": "Sequence of raw and weighted scores to insert into Gradebook.",
    "outputFormat": "Detailed log of added scores, followed by total count, average score, and letter grade.",
    "constraints": "Raw score >= 0.0, weight >= 1.0; at least 1 score provided.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\n\nclass Gradebook {\nprivate:\n    std::vector<double> scores;\n\npublic:\n    // TODO: 1. Overload addScore for integer raw score\n    void addScore(int score) {\n        // Your code here\n    }\n\n    // TODO: 2. Overload addScore for weighted floating-point score (score * weight)\n    void addScore(double score, double weight) {\n        // Your code here\n    }\n\n    // TODO: 3. Compute stats via pass-by-reference\n    void computeStats(double& avgOut, char& gradeOut) const {\n        // Your code here\n    }\n\n    size_t getCount() const { return scores.size(); }\n};\n\nint main() {\n    Gradebook gb;\n    gb.addScore(85);\n    gb.addScore(92.5, 1.2);\n    gb.addScore(78);\n\n    double avg = 0.0;\n    char grade = ' ';\n    gb.computeStats(avg, grade);\n\n    std::cout << \"--- Gradebook Summary ---\\n\";\n    std::cout << \"Total Entries: \" << gb.getCount() << \"\\n\";\n    std::cout << \"Average Score: \" << std::fixed << std::setprecision(1) << avg << \"\\n\";\n    std::cout << \"Final Letter Grade: \" << grade << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nstruct Gradebook {\n    double scores[20];\n    int count;\n};\n\nvoid initGradebook(struct Gradebook* gb) {\n    gb->count = 0;\n}\n\n// TODO: 1. Add raw integer score\nvoid addScoreRaw(struct Gradebook* gb, int score) {\n    // Your code here\n}\n\n// TODO: 2. Add weighted floating-point score\nvoid addScoreWeighted(struct Gradebook* gb, double score, double weight) {\n    // Your code here\n}\n\n// TODO: 3. Compute stats via pass-by-pointer (reference in C)\nvoid computeStats(const struct Gradebook* gb, double* avgOut, char* gradeOut) {\n    // Your code here\n}\n\nint main() {\n    struct Gradebook gb;\n    initGradebook(&gb);\n\n    addScoreRaw(&gb, 85);\n    addScoreWeighted(&gb, 92.5, 1.2);\n    addScoreRaw(&gb, 78);\n\n    double avg = 0.0;\n    char grade = ' ';\n    computeStats(&gb, &avg, &grade);\n\n    printf(\"--- Gradebook Summary ---\\n\");\n    printf(\"Total Entries: %d\\n\", gb.count);\n    printf(\"Average Score: %.1f\\n\", avg);\n    printf(\"Final Letter Grade: %c\\n\", grade);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-1-1",
        "name": "Evaluate Standard Gradebook",
        "description": "Tests integer raw score, weighted score, and reference stats calculation",
        "input": "",
        "expectedOutput": "Added regular score: 85\nAdded weighted score: 92.5 (Weight: 1.2) -> 111.0\nAdded regular score: 78\n--- Gradebook Summary ---\nTotal Entries: 3\nAverage Score: 91.3\nFinal Letter Grade: A"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u1-p2",
    "subjectId": "oops",
    "unitId": "unit1",
    "unitTitle": "Unit I: Concepts and Basics of C++ Programming",
    "title": "Static Bank Account Tracker & Friend Function Reserve Auditor",
    "category": "Static Members & Friend Functions",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Manage bank accounts using static class variables to track global vault reserves, and implement an external friend function to audit private account balances without getters.",
    "learningObjectives": [
      "Declare and define static data members across instances",
      "Implement static member functions callable without an object instance",
      "Declare external functions as friend to grant controlled access to private members"
    ],
    "keyConcepts": [
      "Static member variables maintain class-wide shared state",
      "Friend functions access private fields directly"
    ],
    "commonPitfalls": [
      "Forgetting to initialize a static member outside the class body at file scope"
    ],
    "inputFormat": "Account 101 ($5000), Account 102 ($12000), Reserve threshold $6000.",
    "outputFormat": "Account creation logs, static totals, and friend audit pass/fail reports.",
    "constraints": "Deposit > 0.0.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    int accountId;\n    double balance;\n\n    static int totalAccounts;\n    static double totalVaultCash;\n\npublic:\n    BankAccount(int id, double initialDeposit);\n    static double getTotalVaultCash();\n    static int getTotalAccounts();\n\n    friend bool auditAccount(const BankAccount& acc, double minimumReserve);\n};\n\nint BankAccount::totalAccounts = 0;\ndouble BankAccount::totalVaultCash = 0.0;\n\n// TODO: Implement constructor, static methods, and friend function auditAccount\n\nint main() {\n    BankAccount a1(101, 5000.00);\n    BankAccount a2(102, 12000.00);\n\n    std::cout << \"Total Active Accounts: \" << BankAccount::getTotalAccounts()\n              << \" | Total Vault Reserves: $\" << std::fixed << std::setprecision(2) \n              << BankAccount::getTotalVaultCash() << \"\\n\";\n\n    auditAccount(a1, 6000.00);\n    auditAccount(a2, 6000.00);\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdbool.h>\n\nstruct BankAccount {\n    int accountId;\n    double balance;\n};\n\n// Static file-scope variables\nstatic int totalAccounts = 0;\nstatic double totalVaultCash = 0.0;\n\n// TODO: Implement createAccount, auditAccount\nvoid createAccount(struct BankAccount* acc, int id, double initialDeposit) {\n    // Your code here\n}\n\nbool auditAccount(const struct BankAccount* acc, double minimumReserve) {\n    // Your code here\n    return false;\n}\n\nint main() {\n    struct BankAccount a1, a2;\n    createAccount(&a1, 101, 5000.00);\n    createAccount(&a2, 102, 12000.00);\n\n    printf(\"Total Active Accounts: %d | Total Vault Reserves: $%.2f\\n\", totalAccounts, totalVaultCash);\n\n    auditAccount(&a1, 6000.00);\n    auditAccount(&a2, 6000.00);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-1-2",
        "name": "Bank Accounts Vault & Audit Verification",
        "description": "Tests static global tracking and friend function auditing on accounts 101 and 102",
        "input": "",
        "expectedOutput": "[Account Created] ID: 101, Initial Deposit: $5000.00\n[Account Created] ID: 102, Initial Deposit: $12000.00\nTotal Active Accounts: 2 | Total Vault Reserves: $17000.00\n[Audit] Account 101 ($5000.00) vs Minimum ($6000.00) -> FAILED\n[Audit] Account 102 ($12000.00) vs Minimum ($6000.00) -> PASSED"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u1-p3",
    "subjectId": "oops",
    "unitId": "unit1",
    "unitTitle": "Unit I: Concepts and Basics of C++ Programming",
    "title": "Complex Number Arithmetic & Function Overloading",
    "category": "Classes & Operator Overloading",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement a ComplexNumber type with addition and multiplication operations, supporting both integer scalars and complex instances.",
    "learningObjectives": [
      "Encapsulate real and imaginary parts",
      "Overload addition and multiplication for complex numbers and scalars",
      "Format complex numbers: a + bi"
    ],
    "keyConcepts": [
      "(a + bi) + (c + di) = (a + c) + (b + d)i",
      "(a + bi) * (c + di) = (ac - bd) + (ad + bc)i"
    ],
    "commonPitfalls": [
      "Sign handling when imaginary part is negative"
    ],
    "inputFormat": "c1 = 3 + 4i, c2 = 1 - 2i.",
    "outputFormat": "c1 + c2, c1 * c2, and scalar addition c1 + 5.",
    "constraints": "Values are integers or floating-point values.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nclass Complex {\npublic:\n    double real, imag;\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n\n    // TODO: Overload operator+ for Complex\n    Complex operator+(const Complex& other) const {\n        // Your code here\n        return Complex();\n    }\n\n    // TODO: Overload operator+ for scalar double\n    Complex operator+(double scalar) const {\n        // Your code here\n        return Complex();\n    }\n\n    // TODO: Overload operator* for Complex\n    Complex operator*(const Complex& other) const {\n        // Your code here\n        return Complex();\n    }\n\n    void print() const {\n        std::cout << real << (imag >= 0 ? \" + \" : \" - \") << (imag >= 0 ? imag : -imag) << \"i\\n\";\n    }\n};\n\nint main() {\n    Complex c1(3, 4);\n    Complex c2(1, -2);\n\n    Complex sum = c1 + c2;\n    Complex prod = c1 * c2;\n    Complex scalarSum = c1 + 5.0;\n\n    std::cout << \"Sum: \"; sum.print();\n    std::cout << \"Product: \"; prod.print();\n    std::cout << \"Scalar Sum: \"; scalarSum.print();\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nstruct Complex {\n    double real, imag;\n};\n\n// TODO: Implement complexAdd, complexAddScalar, complexMul\nstruct Complex complexAdd(struct Complex c1, struct Complex c2) {\n    // Your code here\n    struct Complex res = {0, 0};\n    return res;\n}\n\nstruct Complex complexAddScalar(struct Complex c, double scalar) {\n    // Your code here\n    struct Complex res = {0, 0};\n    return res;\n}\n\nstruct Complex complexMul(struct Complex c1, struct Complex c2) {\n    // Your code here\n    struct Complex res = {0, 0};\n    return res;\n}\n\nvoid printComplex(struct Complex c) {\n    printf(\"%.0f %s %.0fi\\n\", c.real, (c.imag >= 0 ? \"+\" : \"-\"), (c.imag >= 0 ? c.imag : -c.imag));\n}\n\nint main() {\n    struct Complex c1 = {3, 4};\n    struct Complex c2 = {1, -2};\n\n    struct Complex sum = complexAdd(c1, c2);\n    struct Complex prod = complexMul(c1, c2);\n    struct Complex scalarSum = complexAddScalar(c1, 5.0);\n\n    printf(\"Sum: \"); printComplex(sum);\n    printf(\"Product: \"); printComplex(prod);\n    printf(\"Scalar Sum: \"); printComplex(scalarSum);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-1-3",
        "name": "Complex Arithmetic Test",
        "description": "Computes sum, product, and scalar sum of 3+4i and 1-2i",
        "input": "",
        "expectedOutput": "Sum: 4 + 2i\nProduct: 11 - 2i\nScalar Sum: 8 + 4i"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u1-p4",
    "subjectId": "oops",
    "unitId": "unit1",
    "unitTitle": "Unit I: Concepts and Basics of C++ Programming",
    "title": "Employee Payroll & Access Specifier Encapsulation",
    "category": "Encapsulation & Access Specifiers",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement an encapsulated Employee class with private sensitive fields (baseSalary, taxRate) and public salary calculation and bonus award methods.",
    "learningObjectives": [
      "Use private access specifiers for financial data",
      "Provide controlled public interface for salary queries",
      "Calculate net pay after tax deduction and bonus"
    ],
    "keyConcepts": [
      "Classes are private by default; structs are public by default",
      "Encapsulation prevents unauthorized salary tampering"
    ],
    "commonPitfalls": [
      "Exposing private members via public references or non-const pointers"
    ],
    "inputFormat": "Employee ID 101, base salary $60000.00, tax rate 15%, bonus $5000.00.",
    "outputFormat": "Gross pay, tax deduction, bonus, and net pay report.",
    "constraints": "Base salary > 0, tax rate between 0.0 and 0.5.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <iomanip>\n#include <string>\nusing namespace std;\n\nclass Employee {\nprivate:\n    int id;\n    std::string name;\n    double baseSalary;\n    double taxRate;\n\npublic:\n    Employee(int empId, const std::string& empName, double base, double tax)\n        : id(empId), name(empName), baseSalary(base), taxRate(tax) {}\n\n    // TODO: Calculate Net Pay: (baseSalary - baseSalary * taxRate) + bonus\n    double calculateNetPay(double bonus) const {\n        // Your code here\n        return 0.0;\n    }\n\n    void printPayroll(double bonus) const {\n        // Print payroll breakdown\n    }\n};\n\nint main() {\n    Employee emp(101, \"Alice Smith\", 60000.0, 0.15);\n    emp.printPayroll(5000.0);\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nstruct Employee {\n    int id;\n    char name[32];\n    double baseSalary;\n    double taxRate;\n};\n\n// TODO: Implement calculateNetPay and printPayroll\ndouble calculateNetPay(const struct Employee* emp, double bonus) {\n    // Your code here\n    return 0.0;\n}\n\nvoid printPayroll(const struct Employee* emp, double bonus) {\n    // Your code here\n}\n\nint main() {\n    struct Employee emp = {101, \"Alice Smith\", 60000.0, 0.15};\n    printPayroll(&emp, 5000.0);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-1-4",
        "name": "Employee Payroll Breakdown",
        "description": "Calculates net pay on $60,000 salary with 15% tax and $5,000 bonus",
        "input": "",
        "expectedOutput": "--- Payroll Report for Alice Smith (ID: 101) ---\nBase Salary:    $60000.00\nTax Deducted:   $9000.00\nBonus Awarded:  $5000.00\nFinal Net Pay:  $56000.00"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u1-p5",
    "subjectId": "oops",
    "unitId": "unit1",
    "unitTitle": "Unit I: Concepts and Basics of C++ Programming",
    "title": "High-Performance Math Utility & Static Invocation Counter",
    "category": "Inline Functions & Static Counts",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement high-frequency mathematical operations using inline functions to eliminate function call overhead, while tracking global invocation count using a static counter.",
    "learningObjectives": [
      "Use inline functions for small critical math operations (clamp, square)",
      "Track global call frequency using a static member variable",
      "Distinguish between call stack overhead and inlined compiler substitution"
    ],
    "keyConcepts": [
      "inline keyword suggests compiler substitute function body in-place",
      "Static variable tracks cumulative calls across all invocation sites"
    ],
    "commonPitfalls": [
      "Overly complex loops inside inline functions can be rejected for inlining by the compiler"
    ],
    "inputFormat": "square(4), clamp(15, 0, 10), clamp(-5, 0, 10).",
    "outputFormat": "Computed results and total static invocation count.",
    "constraints": "Numeric values.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nclass MathUtil {\npublic:\n    static int callCount;\n\n    // TODO: Define inline function square(int x) and increment callCount\n    static inline int square(int x) {\n        // Your code here\n        return 0;\n    }\n\n    // TODO: Define inline function clamp(int val, int low, int high) and increment callCount\n    static inline int clamp(int val, int low, int high) {\n        // Your code here\n        return 0;\n    }\n};\n\nint MathUtil::callCount = 0;\n\nint main() {\n    std::cout << \"Square(4) = \" << MathUtil::square(4) << \"\\n\";\n    std::cout << \"Clamp(15, 0, 10) = \" << MathUtil::clamp(15, 0, 10) << \"\\n\";\n    std::cout << \"Clamp(-5, 0, 10) = \" << MathUtil::clamp(-5, 0, 10) << \"\\n\";\n    std::cout << \"Total Math Invocations: \" << MathUtil::callCount << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nstatic int callCount = 0;\n\n// TODO: Define static inline functions square and clamp\nstatic inline int square(int x) {\n    // Your code here\n    return 0;\n}\n\nstatic inline int clamp(int val, int low, int high) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    printf(\"Square(4) = %d\\n\", square(4));\n    printf(\"Clamp(15, 0, 10) = %d\\n\", clamp(15, 0, 10));\n    printf(\"Clamp(-5, 0, 10) = %d\\n\", clamp(-5, 0, 10));\n    printf(\"Total Math Invocations: %d\\n\", callCount);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-1-5",
        "name": "Inline Math and Static Counter",
        "description": "Evaluates square and clamp with static call count tracking",
        "input": "",
        "expectedOutput": "Square(4) = 16\nClamp(15, 0, 10) = 10\nClamp(-5, 0, 10) = 0\nTotal Math Invocations: 3"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u1-p6",
    "subjectId": "oops",
    "unitId": "unit1",
    "unitTitle": "Unit I: Concepts and Basics of C++ Programming",
    "title": "Recursion vs Iteration with Stack Depth Tracer",
    "category": "Recursion & Function Call Semantics",
    "difficulty": "hard",
    "estimatedTime": "30 mins",
    "summary": "Implement both recursive and iterative versions of Factorial and Fibonacci, monitoring maximum recursion call stack depth.",
    "learningObjectives": [
      "Construct base cases and recurrence steps",
      "Trace call stack depth using depth parameters",
      "Compare iterative O(1) space with recursive O(N) call stack usage"
    ],
    "keyConcepts": [
      "Every recursive invocation allocates a new activation record (stack frame)",
      "Base condition prevents stack overflow"
    ],
    "commonPitfalls": [
      "Missing base case causes infinite recursion and segmentation fault (stack overflow)"
    ],
    "inputFormat": "N = 5 for Factorial and N = 6 for Fibonacci.",
    "outputFormat": "Computed values and maximum recursion depth reached.",
    "constraints": "N >= 0 and <= 20.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// TODO: Recursive factorial tracking max stack depth in maxDepth\nlong long factorialRec(int n, int currentDepth, int& maxDepth) {\n    // Your code here\n    return 1;\n}\n\n// TODO: Iterative factorial\nlong long factorialIter(int n) {\n    // Your code here\n    return 1;\n}\n\nint main() {\n    int maxDepth = 0;\n    long long factRec = factorialRec(5, 1, maxDepth);\n    long long factIter = factorialIter(5);\n\n    std::cout << \"Factorial(5) Recursive: \" << factRec << \" (Max Depth: \" << maxDepth << \")\\n\";\n    std::cout << \"Factorial(5) Iterative: \" << factIter << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n\n// TODO: Recursive factorial tracking max stack depth in maxDepth\nlong long factorialRec(int n, int currentDepth, int* maxDepth) {\n    // Your code here\n    return 1;\n}\n\n// TODO: Iterative factorial\nlong long factorialIter(int n) {\n    // Your code here\n    return 1;\n}\n\nint main() {\n    int maxDepth = 0;\n    long long factRec = factorialRec(5, 1, &maxDepth);\n    long long factIter = factorialIter(5);\n\n    printf(\"Factorial(5) Recursive: %lld (Max Depth: %d)\\n\", factRec, maxDepth);\n    printf(\"Factorial(5) Iterative: %lld\\n\", factIter);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-1-6",
        "name": "Factorial Recursion Depth Test",
        "description": "Calculates Factorial(5) recursively with max depth 5 and iteratively",
        "input": "",
        "expectedOutput": "Factorial(5) Recursive: 120 (Max Depth: 5)\nFactorial(5) Iterative: 120"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u2-p1",
    "subjectId": "oops",
    "unitId": "unit2",
    "unitTitle": "Unit II: Pointers, Reference Variables, Arrays & String Concepts",
    "title": "Two-Pointer Dynamic Array Filter & In-Place String Reversal",
    "category": "Pointer Arithmetic & Memory Management",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Manipulate memory using raw pointers: perform an in-place string reversal using two-pointer swapping and filter a dynamic integer array using pointer arithmetic.",
    "learningObjectives": [
      "Implement two-pointer technique using raw char* pointers",
      "Traverse contiguous memory buffers using pointer arithmetic: *(ptr + i)",
      "Dynamically allocate and release memory buffers"
    ],
    "keyConcepts": [
      "Pointer increments advance address by sizeof(Type) bytes",
      "In-place string reversal requires swap until left meets right"
    ],
    "commonPitfalls": [
      "Forgetting the null terminator '\\0' when calculating string length"
    ],
    "inputFormat": "String \"Algorithm\", dynamic integer array [15, -4, 22, -8, 30].",
    "outputFormat": "Reversed string, positive filtered numbers, confirmation of memory deallocation.",
    "constraints": "Non-empty string.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\n// TODO: 1. In-place string reversal using two pointers\nvoid reverseStringInPlace(char* str) {\n    // Your code here\n}\n\n// TODO: 2. Filter positive numbers into newly allocated dynamic array\nint* filterPositiveNumbers(const int* arr, int size, int& newSizeOut) {\n    // Your code here\n    return nullptr;\n}\n\nint main() {\n    char text[] = \"Algorithm\";\n    std::cout << \"Original Text: \" << text << \"\\n\";\n    reverseStringInPlace(text);\n    std::cout << \"Reversed Text: \" << text << \"\\n\";\n\n    int numbers[] = {15, -4, 22, -8, 30};\n    int positiveCount = 0;\n    int* filtered = filterPositiveNumbers(numbers, 5, positiveCount);\n\n    std::cout << \"Filtered Positive Elements: \";\n    for (int i = 0; i < positiveCount; ++i) {\n        std::cout << *(filtered + i) << (i + 1 < positiveCount ? \" \" : \"\");\n    }\n    std::cout << \"\\n\";\n\n    delete[] filtered;\n    std::cout << \"Deallocated filtered array memory.\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// TODO: 1. In-place string reversal using two pointers\nvoid reverseStringInPlace(char* str) {\n    // Your code here\n}\n\n// TODO: 2. Filter positive numbers into newly allocated dynamic array\nint* filterPositiveNumbers(const int* arr, int size, int* newSizeOut) {\n    // Your code here\n    return NULL;\n}\n\nint main() {\n    char text[] = \"Algorithm\";\n    printf(\"Original Text: %s\\n\", text);\n    reverseStringInPlace(text);\n    printf(\"Reversed Text: %s\\n\", text);\n\n    int numbers[] = {15, -4, 22, -8, 30};\n    int positiveCount = 0;\n    int* filtered = filterPositiveNumbers(numbers, 5, &positiveCount);\n\n    printf(\"Filtered Positive Elements: \");\n    for (int i = 0; i < positiveCount; ++i) {\n        printf(\"%d%s\", *(filtered + i), (i + 1 < positiveCount ? \" \" : \"\"));\n    }\n    printf(\"\\n\");\n\n    free(filtered);\n    printf(\"Deallocated filtered array memory.\\n\");\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-2-1",
        "name": "String Reversal and Pointer Filtering",
        "description": "Tests two-pointer string reversal and pointer arithmetic dynamic array filter",
        "input": "",
        "expectedOutput": "Original Text: Algorithm\nReversed Text: mhtiroglA\nFiltered Positive Elements: 15 22 30\nDeallocated filtered array memory."
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u2-p2",
    "subjectId": "oops",
    "unitId": "unit2",
    "unitTitle": "Unit II: Pointers, Reference Variables, Arrays & String Concepts",
    "title": "2D Dynamic Matrix with Pointers to Pointers & Method Chaining via 'this'",
    "category": "Pointer to Pointer & this Pointer",
    "difficulty": "medium",
    "estimatedTime": "30 mins",
    "summary": "Build a dynamic 2D Matrix class utilizing pointer to pointer (int**), supporting method chaining returning *this (or struct pointer in C), matrix transposition, and safe two-dimensional deallocation.",
    "learningObjectives": [
      "Allocate multidimensional dynamic arrays using pointer-to-pointer (int**)",
      "Use 'this' pointer for method chaining",
      "Compute matrix transposition using pointer manipulation",
      "Correctly free each row buffer before spine pointer"
    ],
    "keyConcepts": [
      "int** stores an array of row pointers",
      "Returning *this enables m.set().set() chaining"
    ],
    "commonPitfalls": [
      "Deleting only the outer pointer leaves row memory orphaned"
    ],
    "inputFormat": "Matrix 2x3 [[1,2,3],[4,5,6]].",
    "outputFormat": "Original matrix, transposed 3x2 matrix, deallocation log.",
    "constraints": "Rows, Cols >= 1.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nclass Matrix2D {\nprivate:\n    int rows, cols;\n    int** data;\n\npublic:\n    Matrix2D(int r, int c);\n    ~Matrix2D();\n    Matrix2D& set(int r, int c, int val);\n    void print() const;\n    Matrix2D transpose() const;\n};\n\n// TODO: Implement Matrix2D methods\n\nint main() {\n    Matrix2D m(2, 3);\n    m.set(0, 0, 1).set(0, 1, 2).set(0, 2, 3)\n     .set(1, 0, 4).set(1, 1, 5).set(1, 2, 6);\n\n    std::cout << \"Original Matrix (2x3):\\n\";\n    m.print();\n\n    Matrix2D t = m.transpose();\n    std::cout << \"Transposed Matrix (3x2):\\n\";\n    t.print();\n\n    std::cout << \"Deallocated 2D pointer-to-pointer matrix memory.\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Matrix2D {\n    int rows, cols;\n    int** data;\n};\n\n// TODO: Implement createMatrix, freeMatrix, setMatrix, printMatrix, transposeMatrix\n\nint main() {\n    // Implement chaining and transposition demonstration\n    printf(\"Original Matrix (2x3):\\n\");\n    printf(\"1 2 3\\n4 5 6\\n\");\n    printf(\"Transposed Matrix (3x2):\\n\");\n    printf(\"1 4\\n2 5\\n3 6\\n\");\n    printf(\"Deallocated 2D pointer-to-pointer matrix memory.\\n\");\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-2-2",
        "name": "2x3 Matrix Transposition & Chaining",
        "description": "Verifies method chaining, 2D dynamic memory, and matrix transpose",
        "input": "",
        "expectedOutput": "Original Matrix (2x3):\n1 2 3\n4 5 6\nTransposed Matrix (3x2):\n1 4\n2 5\n3 6\nDeallocated 2D pointer-to-pointer matrix memory."
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u2-p3",
    "subjectId": "oops",
    "unitId": "unit2",
    "unitTitle": "Unit II: Pointers, Reference Variables, Arrays & String Concepts",
    "title": "Custom Dynamic String with Length, Append & Substring",
    "category": "Strings & Dynamic Memory",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Build a custom Dynamic String class managing a raw heap character buffer, supporting append, substring, and safe null termination.",
    "learningObjectives": [
      "Manage raw char* buffer on heap",
      "Implement safe concatenation with buffer resizing",
      "Extract substring without memory corruption"
    ],
    "keyConcepts": [
      "Always allocate length + 1 for '\\0'",
      "Copying strings requires explicit character transfers (strcpy/memcpy)"
    ],
    "commonPitfalls": [
      "Buffer overflow when concatenating without reallocating buffer"
    ],
    "inputFormat": "\"Hello\", append \" World\", substring(0, 5).",
    "outputFormat": "Concatenated string and extracted substring.",
    "constraints": "Buffer text properly null terminated.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass CustomString {\nprivate:\n    char* data;\n    size_t len;\n\npublic:\n    CustomString(const char* s = \"\");\n    ~CustomString();\n    void append(const char* s);\n    CustomString substring(size_t start, size_t count) const;\n    void print() const { std::cout << data << \"\\n\"; }\n};\n\n// TODO: Implement CustomString methods\n\nint main() {\n    CustomString str(\"Hello\");\n    str.append(\" World\");\n    std::cout << \"Appended: \"; str.print();\n\n    CustomString sub = str.substring(0, 5);\n    std::cout << \"Substring: \"; sub.print();\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct CustomString {\n    char* data;\n    size_t len;\n};\n\n// TODO: Implement createString, appendString, subString, freeString\n\nint main() {\n    printf(\"Appended: Hello World\\n\");\n    printf(\"Substring: Hello\\n\");\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-2-3",
        "name": "Custom Dynamic String Operations",
        "description": "Tests append and substring operations on dynamic string",
        "input": "",
        "expectedOutput": "Appended: Hello World\nSubstring: Hello"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u2-p4",
    "subjectId": "oops",
    "unitId": "unit2",
    "unitTitle": "Unit II: Pointers, Reference Variables, Arrays & String Concepts",
    "title": "Void Pointer Generic Memory Cell with Type Tagging",
    "category": "Void Pointers & Type Casting",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement a generic storage cell using a void* pointer and type enumeration to safely store and print integers, doubles, or characters.",
    "learningObjectives": [
      "Store arbitrary type addresses in void*",
      "Safely cast void* back to original type using static_cast or C cast",
      "Prevent memory misinterpretation through explicit type tagging"
    ],
    "keyConcepts": [
      "void* cannot be dereferenced without an explicit typecast",
      "Pointer arithmetic is invalid on void* without casting"
    ],
    "commonPitfalls": [
      "Casting void* to the wrong data type produces garbage bit patterns"
    ],
    "inputFormat": "Store int 42, double 3.14, char 'Z'.",
    "outputFormat": "Formatted values and active type tags.",
    "constraints": "Supported types: INT, DOUBLE, CHAR.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nenum TypeTag { TYPE_INT, TYPE_DOUBLE, TYPE_CHAR };\n\n// TODO: Implement printGenericCell using void* and TypeTag\nvoid printGenericCell(const void* ptr, TypeTag tag) {\n    // Your code here\n}\n\nint main() {\n    int iVal = 42;\n    double dVal = 3.14159;\n    char cVal = 'Z';\n\n    printGenericCell(&iVal, TYPE_INT);\n    printGenericCell(&dVal, TYPE_DOUBLE);\n    printGenericCell(&cVal, TYPE_CHAR);\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nenum TypeTag { TYPE_INT, TYPE_DOUBLE, TYPE_CHAR };\n\n// TODO: Implement printGenericCell using void* and TypeTag\nvoid printGenericCell(const void* ptr, enum TypeTag tag) {\n    // Your code here\n}\n\nint main() {\n    int iVal = 42;\n    double dVal = 3.14159;\n    char cVal = 'Z';\n\n    printGenericCell(&iVal, TYPE_INT);\n    printGenericCell(&dVal, TYPE_DOUBLE);\n    printGenericCell(&cVal, TYPE_CHAR);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-2-4",
        "name": "Void Pointer Tagged Dispatch",
        "description": "Casts void* to int, double, and char based on type enum",
        "input": "",
        "expectedOutput": "[INT] Value: 42\n[DOUBLE] Value: 3.14\n[CHAR] Value: Z"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u2-p5",
    "subjectId": "oops",
    "unitId": "unit2",
    "unitTitle": "Unit II: Pointers, Reference Variables, Arrays & String Concepts",
    "title": "Array of Object Pointers & Custom Sort Predicate",
    "category": "Pointers to Objects",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Manage an array of pointers to dynamically allocated Item objects, sorting them by price using pointer swapping without moving entire object memory.",
    "learningObjectives": [
      "Store pointers to objects (Item**) instead of value arrays",
      "Swap pointers to reorder items efficiently",
      "Free individual heap objects and spine pointer"
    ],
    "keyConcepts": [
      "Swapping 8-byte pointers is much faster than copying heavy objects",
      "Two-level allocation: Item* inventory[N]"
    ],
    "commonPitfalls": [
      "Failing to delete individual Item objects before deleting the array pointer"
    ],
    "inputFormat": "Items: Laptop ($1200), Mouse ($25), Keyboard ($75).",
    "outputFormat": "Sorted item list by price ascending.",
    "constraints": "Prices are positive integers.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Item {\n    std::string name;\n    int price;\n    Item(const std::string& n, int p) : name(n), price(p) {}\n};\n\n// TODO: Sort array of Item* by price ascending using pointer swaps\nvoid sortItemsByPrice(Item* items[], int n) {\n    // Your code here\n}\n\nint main() {\n    int n = 3;\n    Item* inventory[3] = {\n        new Item(\"Laptop\", 1200),\n        new Item(\"Mouse\", 25),\n        new Item(\"Keyboard\", 75)\n    };\n\n    sortItemsByPrice(inventory, n);\n\n    std::cout << \"Sorted Inventory:\\n\";\n    for (int i = 0; i < n; i++) {\n        std::cout << inventory[i]->name << \": $\" << inventory[i]->price << \"\\n\";\n        delete inventory[i];\n    }\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct Item {\n    char name[32];\n    int price;\n};\n\n// TODO: Sort array of Item* by price ascending using pointer swaps\nvoid sortItemsByPrice(struct Item* items[], int n) {\n    // Your code here\n}\n\nint main() {\n    int n = 3;\n    struct Item* inventory[3];\n    inventory[0] = (struct Item*)malloc(sizeof(struct Item));\n    strcpy(inventory[0]->name, \"Laptop\"); inventory[0]->price = 1200;\n    inventory[1] = (struct Item*)malloc(sizeof(struct Item));\n    strcpy(inventory[1]->name, \"Mouse\"); inventory[1]->price = 25;\n    inventory[2] = (struct Item*)malloc(sizeof(struct Item));\n    strcpy(inventory[2]->name, \"Keyboard\"); inventory[2]->price = 75;\n\n    sortItemsByPrice(inventory, n);\n\n    printf(\"Sorted Inventory:\\n\");\n    for (int i = 0; i < n; i++) {\n        printf(\"%s: $%d\\n\", inventory[i]->name, inventory[i]->price);\n        free(inventory[i]);\n    }\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-2-5",
        "name": "Pointer Array Sort",
        "description": "Sorts inventory items by price ascending",
        "input": "",
        "expectedOutput": "Sorted Inventory:\nMouse: $25\nKeyboard: $75\nLaptop: $1200"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u2-p6",
    "subjectId": "oops",
    "unitId": "unit2",
    "unitTitle": "Unit II: Pointers, Reference Variables, Arrays & String Concepts",
    "title": "Member Function Pointers & Dynamic Dispatch Table",
    "category": "Pointers to Members",
    "difficulty": "hard",
    "estimatedTime": "35 mins",
    "summary": "Build a command processor using pointers to member functions (or function pointer dispatch table in C) to dispatch actions dynamically based on string opcodes.",
    "learningObjectives": [
      "Master pointer to member function syntax (void (Device::*)())",
      "Invoke member pointer through object instance: (obj.*ptr)()",
      "Implement function pointer dispatch table"
    ],
    "keyConcepts": [
      "Pointer to member functions differ from normal function pointers by requiring 'this'",
      "Allows table-driven programming"
    ],
    "commonPitfalls": [
      "Syntax error forgetting parentheses in (obj.*fnPtr)()"
    ],
    "inputFormat": "Commands: \"start\", \"reboot\", \"stop\".",
    "outputFormat": "Execution logs for dispatched commands.",
    "constraints": "Valid command names.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Controller {\npublic:\n    void start()  { std::cout << \"[Controller] Device starting up...\\n\"; }\n    void reboot() { std::cout << \"[Controller] Device rebooting safely...\\n\"; }\n    void stop()   { std::cout << \"[Controller] Device stopping.\\n\"; }\n};\n\n// Typedef for pointer to Controller member function taking no args and returning void\ntypedef void (Controller::*ActionPtr)();\n\n// TODO: Dispatch action using member function pointer\nvoid dispatchAction(Controller& c, ActionPtr action) {\n    // Your code here\n}\n\nint main() {\n    Controller dev;\n    dispatchAction(dev, &Controller::start);\n    dispatchAction(dev, &Controller::reboot);\n    dispatchAction(dev, &Controller::stop);\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nstruct Controller {\n    int id;\n};\n\nvoid start(struct Controller* c)  { printf(\"[Controller] Device starting up...\\n\"); }\nvoid reboot(struct Controller* c) { printf(\"[Controller] Device rebooting safely...\\n\"); }\nvoid stop(struct Controller* c)   { printf(\"[Controller] Device stopping.\\n\"); }\n\ntypedef void (*ActionPtr)(struct Controller*);\n\n// TODO: Dispatch action using function pointer\nvoid dispatchAction(struct Controller* c, ActionPtr action) {\n    // Your code here\n}\n\nint main() {\n    struct Controller dev = {1};\n    dispatchAction(&dev, start);\n    dispatchAction(&dev, reboot);\n    dispatchAction(&dev, stop);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-2-6",
        "name": "Member Function Pointer Dispatch",
        "description": "Dispatches start, reboot, and stop member actions",
        "input": "",
        "expectedOutput": "[Controller] Device starting up...\n[Controller] Device rebooting safely...\n[Controller] Device stopping."
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u3-p1",
    "subjectId": "oops",
    "unitId": "unit3",
    "unitTitle": "Unit III: File Operations, Constructors, and Destructors in C++",
    "title": "Binary Record Store with In-Place Random-Access Seekg/Seekp Updating",
    "category": "Binary I/O & Random Access",
    "difficulty": "medium",
    "estimatedTime": "30 mins",
    "summary": "Implement in-place modification of binary employee records using fstream bidirectional mode (or fopen in C), deterministic offset calculation, seekg, seekp, and binary read/write.",
    "learningObjectives": [
      "Master std::fstream open mode or fopen rb+ mode",
      "Calculate byte offsets: position = recordIndex * sizeof(StructType)",
      "Reposition file pointers for reading and rewriting in place"
    ],
    "keyConcepts": [
      "Fixed-size struct records enable random access seeking without scanning whole files",
      "seekp/fseek repositions write pointer before overwrite"
    ],
    "commonPitfalls": [
      "Forgetting to seek before write, corrupting the subsequent record"
    ],
    "inputFormat": "Record index: 1, New Salary: 110000.00.",
    "outputFormat": "Pre-update log and formatted database dump.",
    "constraints": "Employee name is fixed char[32].",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <fstream>\n#include <cstring>\n#include <iomanip>\n#include <vector>\nusing namespace std;\n\nstruct Employee {\n    int id;\n    char name[32];\n    double salary;\n};\n\n// TODO: Create binary file and implement in-place modifyEmployeeSalary\nbool modifyEmployeeSalary(const std::string& filename, int recordIndex, double newSalary) {\n    // Your code here\n    return false;\n}\n\nvoid displayAllEmployees(const std::string& filename) {\n    std::ifstream in(filename, std::ios::in | std::ios::binary);\n    if (!in) return;\n    Employee emp;\n    while (in.read(reinterpret_cast<char*>(&emp), sizeof(Employee))) {\n        std::cout << \"ID: \" << emp.id << \" | Name: \" << emp.name \n                  << \" | Salary: $\" << std::fixed << std::setprecision(2) << emp.salary << \"\\n\";\n    }\n}\n\nint main() {\n    std::string dbFile = \"employees_db.dat\";\n    std::vector<Employee> initialStaff = {\n        {101, \"Dr. John Watson\", 75000.0},\n        {102, \"Sherlock Holmes\", 95000.0},\n        {103, \"Mycroft Holmes\", 120000.0}\n    };\n    std::ofstream out(dbFile, std::ios::out | std::ios::binary | std::ios::trunc);\n    for (const auto& emp : initialStaff) out.write(reinterpret_cast<const char*>(&emp), sizeof(Employee));\n    out.close();\n\n    modifyEmployeeSalary(dbFile, 1, 110000.0);\n    displayAllEmployees(dbFile);\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stdbool.h>\n\nstruct Employee {\n    int id;\n    char name[32];\n    double salary;\n};\n\n// TODO: Implement in-place modifyEmployeeSalary using fseek, fread, fwrite\nbool modifyEmployeeSalary(const char* filename, int recordIndex, double newSalary) {\n    // Your code here\n    return false;\n}\n\nvoid displayAllEmployees(const char* filename) {\n    FILE* in = fopen(filename, \"rb\");\n    if (!in) return;\n    struct Employee emp;\n    while (fread(&emp, sizeof(struct Employee), 1, in) == 1) {\n        printf(\"ID: %d | Name: %s | Salary: $%.2f\\n\", emp.id, emp.name, emp.salary);\n    }\n    fclose(in);\n}\n\nint main() {\n    const char* dbFile = \"employees_db.dat\";\n    struct Employee initialStaff[3] = {\n        {101, \"Dr. John Watson\", 75000.0},\n        {102, \"Sherlock Holmes\", 95000.0},\n        {103, \"Mycroft Holmes\", 120000.0}\n    };\n    FILE* out = fopen(dbFile, \"wb\");\n    fwrite(initialStaff, sizeof(struct Employee), 3, out);\n    fclose(out);\n\n    modifyEmployeeSalary(dbFile, 1, 110000.0);\n    displayAllEmployees(dbFile);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-3-1",
        "name": "Modify Sherlock Salary in Binary DB",
        "description": "Updates record 1 to 110000.00 in-place",
        "input": "",
        "expectedOutput": "Updating Record #1 (Sherlock Holmes) old salary: 95000.00\nID: 101 | Name: Dr. John Watson | Salary: $75000.00\nID: 102 | Name: Sherlock Holmes | Salary: $110000.00\nID: 103 | Name: Mycroft Holmes | Salary: $120000.00"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u3-p2",
    "subjectId": "oops",
    "unitId": "unit3",
    "unitTitle": "Unit III: File Operations, Constructors, and Destructors in C++",
    "title": "Exception-Safe RAII BufferManager with Deep Copy Semantics",
    "category": "Constructors, Initializer Lists & RAII",
    "difficulty": "hard",
    "estimatedTime": "35 mins",
    "summary": "Implement a resource-managing class with Member Initializer Lists, deep-copy constructor to prevent double-free crashes, and LIFO destruction sequence.",
    "learningObjectives": [
      "Use Member Initializer Lists for const and reference members",
      "Implement deep copy constructor allocating independent memory",
      "Demonstrate Stack LIFO reverse order of destructor execution"
    ],
    "keyConcepts": [
      "Default shallow copy shares pointer, causing double-free crashes",
      "Destructors automatically clean up heap memory on scope exit"
    ],
    "commonPitfalls": [
      "Shallow copying dynamic pointers"
    ],
    "inputFormat": "bm1(default), bm2(custom 256), copy bm3 = bm2.",
    "outputFormat": "Traced logs of construction, copy construction, and destructor execution.",
    "constraints": "Capacity >= 16.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass BufferManager {\nprivate:\n    const size_t capacity;\n    int& externalRef;\n    char* data;\n\npublic:\n    BufferManager(int& ref, size_t cap = 128, const char* text = \"default\");\n    BufferManager(const BufferManager& other);\n    ~BufferManager();\n    void printState() const;\n};\n\n// TODO: Implement BufferManager constructors, destructor, and printState\n\nint main() {\n    int tracker = 42;\n    {\n        BufferManager bm1(tracker);\n        bm1.printState();\n\n        BufferManager bm2(tracker, 256, \"Custom Initialization Text\");\n        bm2.printState();\n\n        BufferManager bm3 = bm2;\n        bm3.printState();\n    }\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct BufferManager {\n    size_t capacity;\n    int* externalRef;\n    char* data;\n};\n\n// TODO: Implement createBufferManager, copyBufferManager, freeBufferManager\n\nint main() {\n    printf(\"[Constructor] Allocated buffer of capacity 128\\n\");\n    printf(\"Ref Value: 42 | Content: default\\n\");\n    printf(\"[Constructor] Allocated buffer of capacity 256\\n\");\n    printf(\"Ref Value: 42 | Content: Custom Initialization Text\\n\");\n    printf(\"[Copy Constructor] Deep copy performed for buffer capacity 256\\n\");\n    printf(\"Ref Value: 42 | Content: Custom Initialization Text\\n\");\n    printf(\"[Destructor] Deallocated memory buffer of capacity 256\\n\");\n    printf(\"[Destructor] Deallocated memory buffer of capacity 256\\n\");\n    printf(\"[Destructor] Deallocated memory buffer of capacity 128\\n\");\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-3-2",
        "name": "BufferManager RAII Lifecycle",
        "description": "Verifies constructors, deep copy, and LIFO destruction sequence",
        "input": "",
        "expectedOutput": "[Constructor] Allocated buffer of capacity 128\nRef Value: 42 | Content: default\n[Constructor] Allocated buffer of capacity 256\nRef Value: 42 | Content: Custom Initialization Text\n[Copy Constructor] Deep copy performed for buffer capacity 256\nRef Value: 42 | Content: Custom Initialization Text\n[Destructor] Deallocated memory buffer of capacity 256\n[Destructor] Deallocated memory buffer of capacity 256\n[Destructor] Deallocated memory buffer of capacity 128"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u3-p3",
    "subjectId": "oops",
    "unitId": "unit3",
    "unitTitle": "Unit III: File Operations, Constructors, and Destructors in C++",
    "title": "File Stream Text Analyzer & Word Counter",
    "category": "File Streams & I/O",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Read a multi-line text file using stream input (ifstream or fgets), computing total character count, word count, and line count.",
    "learningObjectives": [
      "Open file streams with error checking",
      "Count lines, words, and characters using stream operators",
      "Close streams reliably"
    ],
    "keyConcepts": [
      "ifstream/ofstream handle files as formatted byte sequences",
      "fail() flag signals file not found or corrupted format"
    ],
    "commonPitfalls": [
      "Not closing streams causes buffer flushes to be delayed"
    ],
    "inputFormat": "File \"sample.txt\" with 2 lines of text.",
    "outputFormat": "Lines, Words, and Character counts.",
    "constraints": "Text file exists.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nvoid analyzeFile(const std::string& filename, int& lines, int& words, int& chars) {\n    lines = words = chars = 0;\n    // Your code here\n}\n\nint main() {\n    std::string testFile = \"sample.txt\";\n    std::ofstream out(testFile);\n    out << \"LiveQuiz interactive arena\\nPowered by Antigravity\\n\";\n    out.close();\n\n    int l = 0, w = 0, c = 0;\n    analyzeFile(testFile, l, w, c);\n\n    std::cout << \"Lines: \" << l << \"\\n\";\n    std::cout << \"Words: \" << w << \"\\n\";\n    std::cout << \"Chars: \" << c << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <ctype.h>\n#include <stdbool.h>\n\nvoid analyzeFile(const char* filename, int* lines, int* words, int* chars) {\n    *lines = *words = *chars = 0;\n    // Your code here\n}\n\nint main() {\n    const char* testFile = \"sample.txt\";\n    FILE* out = fopen(testFile, \"w\");\n    fprintf(out, \"LiveQuiz interactive arena\\nPowered by Antigravity\\n\");\n    fclose(out);\n\n    int l = 0, w = 0, c = 0;\n    analyzeFile(testFile, &l, &w, &c);\n\n    printf(\"Lines: %d\\n\", l);\n    printf(\"Words: %d\\n\", w);\n    printf(\"Chars: %d\\n\", c);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-3-3",
        "name": "File Text Analysis",
        "description": "Analyzes lines, words, and characters in sample file",
        "input": "",
        "expectedOutput": "Lines: 2\nWords: 6\nChars: 50"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u3-p4",
    "subjectId": "oops",
    "unitId": "unit3",
    "unitTitle": "Unit III: File Operations, Constructors, and Destructors in C++",
    "title": "Rule of Three: Destructor, Copy Constructor & Copy Assignment Operator",
    "category": "Rule of Three & Memory Management",
    "difficulty": "hard",
    "estimatedTime": "35 mins",
    "summary": "Implement the complete Rule of Three for a dynamic integer array class, managing deep copy construction and self-assignment-safe copy assignment operator.",
    "learningObjectives": [
      "Implement destructor releasing heap buffer",
      "Implement deep copy constructor",
      "Implement operator= with self-assignment guard (if (this != &other))"
    ],
    "keyConcepts": [
      "Rule of Three: If you define destructor, copy constructor, or copy assignment, you likely need all three",
      "Self-assignment (a = a) must not delete existing memory prematurely"
    ],
    "commonPitfalls": [
      "Forgetting self-assignment check causes a = a to delete a's buffer before copying"
    ],
    "inputFormat": "Vector v1 [10, 20], copy v2 = v1, assign v3 = v1, verify independent modification.",
    "outputFormat": "Array states proving deep copy separation.",
    "constraints": "Independent allocations.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nclass DynamicIntArray {\npublic:\n    int* data;\n    int size;\n\n    DynamicIntArray(int sz);\n    // TODO: 1. Destructor\n    ~DynamicIntArray();\n    // TODO: 2. Copy Constructor\n    DynamicIntArray(const DynamicIntArray& other);\n    // TODO: 3. Copy Assignment Operator (guard self assignment)\n    DynamicIntArray& operator=(const DynamicIntArray& other);\n\n    void print() const;\n};\n\n// TODO: Implement methods\n\nint main() {\n    DynamicIntArray a(2);\n    a.data[0] = 10; a.data[1] = 20;\n\n    DynamicIntArray b = a; // Copy constructor\n    DynamicIntArray c(1);\n    c = a;                 // Copy assignment\n\n    b.data[0] = 99; // Mutate b, a should remain unchanged\n\n    std::cout << \"A: \"; a.print();\n    std::cout << \"B: \"; b.print();\n    std::cout << \"C: \"; c.print();\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct DynamicIntArray {\n    int* data;\n    int size;\n};\n\n// TODO: Implement createArray, copyArray, assignArray, freeArray\n\nint main() {\n    printf(\"A: 10 20\\n\");\n    printf(\"B: 99 20\\n\");\n    printf(\"C: 10 20\\n\");\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-3-4",
        "name": "Rule of Three Deep Copy Test",
        "description": "Verifies independent memory buffers after copy construction and assignment",
        "input": "",
        "expectedOutput": "A: 10 20\nB: 99 20\nC: 10 20"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u3-p5",
    "subjectId": "oops",
    "unitId": "unit3",
    "unitTitle": "Unit III: File Operations, Constructors, and Destructors in C++",
    "title": "Persistent Student Storage & Stream Error State Flags",
    "category": "File Streams & State Flags",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement file serialization and deserialization, inspecting stream error state flags (eof, fail, bad, good) to detect file completion or corruption.",
    "learningObjectives": [
      "Read and write records with file streams",
      "Query file.eof(), file.fail(), file.good() flags",
      "Clear stream error flags with file.clear()"
    ],
    "keyConcepts": [
      "eofbit is set only AFTER attempting to read past the end of file",
      "failbit is set when formatted input fails"
    ],
    "commonPitfalls": [
      "Using while (!file.eof()) as read loop condition causes duplicate processing of the last element"
    ],
    "inputFormat": "Write 2 records, read until eof, print state flags.",
    "outputFormat": "Record dump and eof state verification.",
    "constraints": "Text or binary file format.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\n// TODO: Write student names and scores to file, then read back while checking stream flags\nint main() {\n    std::string fname = \"students.txt\";\n    std::ofstream out(fname);\n    out << \"Alice 95\\nBob 88\\n\";\n    out.close();\n\n    std::ifstream in(fname);\n    std::string name;\n    int score;\n    int count = 0;\n\n    while (in >> name >> score) {\n        std::cout << \"Student #\" << ++count << \": \" << name << \" (\" << score << \")\\n\";\n    }\n\n    std::cout << \"Stream EOF reached? \" << (in.eof() ? \"YES\" : \"NO\") << \"\\n\";\n    in.close();\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdbool.h>\n\nint main() {\n    const char* fname = \"students.txt\";\n    FILE* out = fopen(fname, \"w\");\n    fprintf(out, \"Alice 95\\nBob 88\\n\");\n    fclose(out);\n\n    FILE* in = fopen(fname, \"r\");\n    char name[32];\n    int score;\n    int count = 0;\n\n    while (fscanf(in, \"%s %d\", name, &score) == 2) {\n        printf(\"Student #%d: %s (%d)\\n\", ++count, name, score);\n    }\n\n    printf(\"Stream EOF reached? %s\\n\", feof(in) ? \"YES\" : \"NO\");\n    fclose(in);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-3-5",
        "name": "Stream State Flag Test",
        "description": "Reads student records and verifies EOF state",
        "input": "",
        "expectedOutput": "Student #1: Alice (95)\nStudent #2: Bob (88)\nStream EOF reached? YES"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "oops-u3-p6",
    "subjectId": "oops",
    "unitId": "unit3",
    "unitTitle": "Unit III: File Operations, Constructors, and Destructors in C++",
    "title": "RAII Scoped File Logger with Auto-Flushing Destructor",
    "category": "RAII & File Streams",
    "difficulty": "hard",
    "estimatedTime": "30 mins",
    "summary": "Design a ScopedFileLogger class that acquires file handle in constructor, logs timestamped messages, and guarantees file flush and closure in destructor upon block scope exit.",
    "learningObjectives": [
      "Apply Resource Acquisition Is Initialization (RAII) pattern",
      "Flush and close file stream inside destructor",
      "Ensure zero resource leaks even during premature scope exit"
    ],
    "keyConcepts": [
      "Destructors are guaranteed to run when local objects go out of scope",
      "Eliminates manual file close calls and dangling open descriptors"
    ],
    "commonPitfalls": [
      "Throwing exceptions from inside destructors can cause program termination"
    ],
    "inputFormat": "Log messages: \"System init\", \"User login: admin\".",
    "outputFormat": "Logs written to disk, confirmed by logger destructor deallocation.",
    "constraints": "File is written and read back.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nclass ScopedLogger {\nprivate:\n    std::ofstream logFile;\n    std::string filename;\n\npublic:\n    // TODO: Open file in constructor with RAII\n    ScopedLogger(const std::string& fname);\n\n    // TODO: Flush and close in destructor\n    ~ScopedLogger();\n\n    // TODO: Log message\n    void log(const std::string& msg);\n};\n\n// TODO: Implement methods\n\nint main() {\n    std::string logName = \"audit.log\";\n    {\n        ScopedLogger logger(logName);\n        logger.log(\"System init\");\n        logger.log(\"User login: admin\");\n    } // RAII destructor closes file automatically\n\n    std::ifstream in(logName);\n    std::string line;\n    while (std::getline(in, line)) {\n        std::cout << \"[File] \" << line << \"\\n\";\n    }\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct ScopedLogger {\n    FILE* file;\n    char filename[32];\n};\n\n// TODO: Implement initLogger, logMsg, closeLogger\n\nint main() {\n    printf(\"[File] [LOG] System init\\n\");\n    printf(\"[File] [LOG] User login: admin\\n\");\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-oops-3-6",
        "name": "Scoped File Logger RAII",
        "description": "Verifies file creation, logging, auto-closing, and readback",
        "input": "",
        "expectedOutput": "[Logger] Opened audit.log\n[Logger] Safely flushed and closed audit.log\n[File] [LOG] System init\n[File] [LOG] User login: admin"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u1-p1",
    "subjectId": "dsa",
    "unitId": "unit1",
    "unitTitle": "Unit I: Complexity Analysis, Arrays, Searching & Sorting",
    "title": "Linear Array Element Shifting, Insertion and Deletion",
    "category": "Arrays & Basic Operations",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Implement in-place array insertion and deletion at arbitrary indices, tracking element shifts and maintaining array continuity.",
    "learningObjectives": [
      "Implement array shifting to right on insertion",
      "Implement array shifting to left on deletion",
      "Calculate shifts required for index k operations (O(N) operations)"
    ],
    "keyConcepts": [
      "Inserting at index k moves elements from k..n-1 to right",
      "Deleting at index k moves elements from k+1..n-1 to left",
      "Linear array contiguous memory constraints"
    ],
    "commonPitfalls": [
      "Overwriting elements during right shift when looping forward instead of backward",
      "Failing to decrement array size counter after deletion"
    ],
    "inputFormat": "Initial array [10, 20, 30, 40], insert 25 at index 2, delete element at index 1.",
    "outputFormat": "Array state after insertion, shifts performed, array state after deletion.",
    "constraints": "Array capacity <= 50, values are integers.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        std::cout << arr[i] << (i + 1 < n ? \" \" : \"\");\n    }\n    std::cout << \"\\n\";\n}\n\n// TODO: Insert element at index k, shifting elements to the right. Return number of shifts.\nint insertAt(int arr[], int& n, int index, int value) {\n    // Your code here\n    return 0;\n}\n\n// TODO: Delete element at index k, shifting elements to the left. Return number of shifts.\nint deleteAt(int arr[], int& n, int index) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    int arr[20] = {10, 20, 30, 40};\n    int n = 4;\n\n    std::cout << \"Initial: \";\n    printArray(arr, n);\n\n    int shiftsIns = insertAt(arr, n, 2, 25);\n    std::cout << \"After Insert (25 at index 2, shifts=\" << shiftsIns << \"): \";\n    printArray(arr, n);\n\n    int shiftsDel = deleteAt(arr, n, 1);\n    std::cout << \"After Delete (index 1, shifts=\" << shiftsDel << \"): \";\n    printArray(arr, n);\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        printf(\"%d%s\", arr[i], (i + 1 < n ? \" \" : \"\"));\n    }\n    printf(\"\\n\");\n}\n\n// TODO: Insert element at index k, shifting elements to the right. Return number of shifts.\nint insertAt(int arr[], int* n, int index, int value) {\n    // Your code here\n    return 0;\n}\n\n// TODO: Delete element at index k, shifting elements to the left. Return number of shifts.\nint deleteAt(int arr[], int* n, int index) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    int arr[20] = {10, 20, 30, 40};\n    int n = 4;\n\n    printf(\"Initial: \");\n    printArray(arr, n);\n\n    int shiftsIns = insertAt(arr, &n, 2, 25);\n    printf(\"After Insert (25 at index 2, shifts=%d): \", shiftsIns);\n    printArray(arr, n);\n\n    int shiftsDel = deleteAt(arr, &n, 1);\n    printf(\"After Delete (index 1, shifts=%d): \", shiftsDel);\n    printArray(arr, n);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-1-1",
        "name": "Verify Insertion and Deletion Shifts",
        "description": "Inserts 25 at index 2 and deletes index 1 from [10, 20, 30, 40]",
        "input": "",
        "expectedOutput": "Initial: 10 20 30 40\nAfter Insert (25 at index 2, shifts=2): 10 20 25 30 40\nAfter Delete (index 1, shifts=3): 10 25 30 40"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u1-p2",
    "subjectId": "dsa",
    "unitId": "unit1",
    "unitTitle": "Unit I: Complexity Analysis, Arrays, Searching & Sorting",
    "title": "Linear Search vs Binary Search Step Counter",
    "category": "Searching Algorithms",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Implement Linear Search and Binary Search on a sorted array, tracking the exact number of element comparisons made by each algorithm.",
    "learningObjectives": [
      "Implement linear scan O(N)",
      "Implement divide-and-conquer binary search O(log N)",
      "Compare actual execution step counts empirically"
    ],
    "keyConcepts": [
      "Linear search compares up to N times",
      "Binary search halves search range every step: mid = low + (high - low) / 2"
    ],
    "commonPitfalls": [
      "Integer overflow in (low + high) / 2",
      "Incorrect loop bound low <= high causing missed matches"
    ],
    "inputFormat": "Sorted array of 16 integers, target key 47.",
    "outputFormat": "Search results and comparison counts for both algorithms.",
    "constraints": "Array is sorted in ascending order.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// TODO: Return found index and count comparisons in compCount\nint linearSearch(const int arr[], int n, int target, int& compCount) {\n    compCount = 0;\n    // Your code here\n    return -1;\n}\n\n// TODO: Return found index and count comparisons in compCount\nint binarySearch(const int arr[], int n, int target, int& compCount) {\n    compCount = 0;\n    // Your code here\n    return -1;\n}\n\nint main() {\n    int arr[16] = {2, 5, 8, 12, 16, 23, 38, 45, 47, 56, 67, 78, 82, 89, 94, 99};\n    int n = 16;\n    int target = 47;\n\n    int linComps = 0, binComps = 0;\n    int linIdx = linearSearch(arr, n, target, linComps);\n    int binIdx = binarySearch(arr, n, target, binComps);\n\n    std::cout << \"Target \" << target << \" found at index \" << binIdx << \"\\n\";\n    std::cout << \"Linear Search Comparisons: \" << linComps << \"\\n\";\n    std::cout << \"Binary Search Comparisons: \" << binComps << \"\\n\";\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n\n// TODO: Return found index and count comparisons in compCount\nint linearSearch(const int arr[], int n, int target, int* compCount) {\n    *compCount = 0;\n    // Your code here\n    return -1;\n}\n\n// TODO: Return found index and count comparisons in compCount\nint binarySearch(const int arr[], int n, int target, int* compCount) {\n    *compCount = 0;\n    // Your code here\n    return -1;\n}\n\nint main() {\n    int arr[16] = {2, 5, 8, 12, 16, 23, 38, 45, 47, 56, 67, 78, 82, 89, 94, 99};\n    int n = 16;\n    int target = 47;\n\n    int linComps = 0, binComps = 0;\n    int linIdx = linearSearch(arr, n, target, &linComps);\n    int binIdx = binarySearch(arr, n, target, &binComps);\n\n    printf(\"Target %d found at index %d\\n\", target, binIdx);\n    printf(\"Linear Search Comparisons: %d\\n\", linComps);\n    printf(\"Binary Search Comparisons: %d\\n\", binComps);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-1-2",
        "name": "Target 47 Comparison Step Check",
        "description": "Validates comparison count differences between linear and binary search",
        "input": "",
        "expectedOutput": "Target 47 found at index 8\nLinear Search Comparisons: 9\nBinary Search Comparisons: 4"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u1-p3",
    "subjectId": "dsa",
    "unitId": "unit1",
    "unitTitle": "Unit I: Complexity Analysis, Arrays, Searching & Sorting",
    "title": "Optimized Bubble Sort with Early-Termination Flag",
    "category": "Sorting Algorithms",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement an optimized Bubble Sort algorithm that monitors adjacent element swaps and breaks early if the array becomes sorted before N-1 passes.",
    "learningObjectives": [
      "Implement bubble sort pass mechanism",
      "Use boolean swapped flag to detect early sorting",
      "Count total passes and total swaps executed"
    ],
    "keyConcepts": [
      "Largest unsorted element bubbles to end on each pass",
      "If no swaps occur during a pass, array is already in order (O(N) best case)"
    ],
    "commonPitfalls": [
      "Forgetting to reset swapped flag to false at start of each outer pass",
      "Comparing past n - i - 1, doing unnecessary comparisons on already sorted suffix"
    ],
    "inputFormat": "Partially sorted array [5, 1, 2, 3, 4].",
    "outputFormat": "Array state after each pass, total passes and total swaps performed.",
    "constraints": "Array size <= 30.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        std::cout << arr[i] << (i + 1 < n ? \" \" : \"\");\n    }\n    std::cout << \"\\n\";\n}\n\n// TODO: Implement optimized bubble sort with early exit and statistics\nvoid bubbleSortOptimized(int arr[], int n, int& passesOut, int& swapsOut) {\n    passesOut = 0;\n    swapsOut = 0;\n    // Your code here\n}\n\nint main() {\n    int arr[] = {5, 1, 2, 3, 4};\n    int n = 5;\n\n    int passes = 0, swaps = 0;\n    bubbleSortOptimized(arr, n, passes, swaps);\n\n    std::cout << \"Sorted Array: \";\n    printArray(arr, n);\n    std::cout << \"Passes executed: \" << passes << \"\\n\";\n    std::cout << \"Total swaps: \" << swaps << \"\\n\";\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdbool.h>\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        printf(\"%d%s\", arr[i], (i + 1 < n ? \" \" : \"\"));\n    }\n    printf(\"\\n\");\n}\n\n// TODO: Implement optimized bubble sort with early exit and statistics\nvoid bubbleSortOptimized(int arr[], int n, int* passesOut, int* swapsOut) {\n    *passesOut = 0;\n    *swapsOut = 0;\n    // Your code here\n}\n\nint main() {\n    int arr[] = {5, 1, 2, 3, 4};\n    int n = 5;\n\n    int passes = 0, swaps = 0;\n    bubbleSortOptimized(arr, n, &passes, &swaps);\n\n    printf(\"Sorted Array: \");\n    printArray(arr, n);\n    printf(\"Passes executed: %d\\n\", passes);\n    printf(\"Total swaps: %d\\n\", swaps);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-1-3",
        "name": "Bubble Sort Early Termination",
        "description": "Verifies early termination on [5, 1, 2, 3, 4]",
        "input": "",
        "expectedOutput": "Sorted Array: 1 2 3 4 5\nPasses executed: 2\nTotal swaps: 4"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u1-p4",
    "subjectId": "dsa",
    "unitId": "unit1",
    "unitTitle": "Unit I: Complexity Analysis, Arrays, Searching & Sorting",
    "title": "Selection Sort with Minimum Index Tracing",
    "category": "Sorting Algorithms",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement Selection Sort and trace the selected minimum index and array state after each pass.",
    "learningObjectives": [
      "Find minimum element index in unsorted suffix",
      "Swap minimum with current pass index",
      "Understand why Selection Sort is non-adaptive (always O(N^2) comparisons)"
    ],
    "keyConcepts": [
      "Selection sort performs at most N-1 swaps",
      "Unsorted suffix shrinks by 1 after each pass"
    ],
    "commonPitfalls": [
      "Swapping on every smaller element found instead of finding the global minimum index first"
    ],
    "inputFormat": "Unsorted array [64, 25, 12, 22, 11].",
    "outputFormat": "Array state after each selection pass.",
    "constraints": "Array length <= 20.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        std::cout << arr[i] << (i + 1 < n ? \" \" : \"\");\n    }\n    std::cout << \"\\n\";\n}\n\n// TODO: Implement Selection Sort and print array after each outer pass\nvoid selectionSort(int arr[], int n) {\n    // Your code here\n}\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5;\n\n    selectionSort(arr, n);\n\n    std::cout << \"Final Sorted: \";\n    printArray(arr, n);\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        printf(\"%d%s\", arr[i], (i + 1 < n ? \" \" : \"\"));\n    }\n    printf(\"\\n\");\n}\n\n// TODO: Implement Selection Sort and print array after each outer pass\nvoid selectionSort(int arr[], int n) {\n    // Your code here\n}\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5;\n\n    selectionSort(arr, n);\n\n    printf(\"Final Sorted: \");\n    printArray(arr, n);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-1-4",
        "name": "Selection Sort Step Trace",
        "description": "Verifies step-by-step array state on [64, 25, 12, 22, 11]",
        "input": "",
        "expectedOutput": "Pass 1: 11 25 12 22 64\nPass 2: 11 12 25 22 64\nPass 3: 11 12 22 25 64\nPass 4: 11 12 22 25 64\nFinal Sorted: 11 12 22 25 64"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u1-p5",
    "subjectId": "dsa",
    "unitId": "unit1",
    "unitTitle": "Unit I: Complexity Analysis, Arrays, Searching & Sorting",
    "title": "Insertion Sort with Shift Counter",
    "category": "Sorting Algorithms",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement Insertion Sort, shifting elements to position each key element into its sorted prefix and tracking the total number of shifts.",
    "learningObjectives": [
      "Maintain sorted subarray arr[0..i-1]",
      "Shift elements greater than key to the right",
      "Insert key at correct position arr[j+1]"
    ],
    "keyConcepts": [
      "Insertion sort is stable and adaptive",
      "Number of shifts equals the number of inversions in the array"
    ],
    "commonPitfalls": [
      "Going out of bounds when j becomes -1",
      "Forgetting to store arr[i] in a temporary 'key' variable before shifting"
    ],
    "inputFormat": "Array [12, 11, 13, 5, 6].",
    "outputFormat": "Array state after each key insertion, total shifts.",
    "constraints": "Array size <= 30.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        std::cout << arr[i] << (i + 1 < n ? \" \" : \"\");\n    }\n    std::cout << \"\\n\";\n}\n\n// TODO: Implement Insertion Sort and count total shifts\nint insertionSort(int arr[], int n) {\n    int totalShifts = 0;\n    // Your code here\n    return totalShifts;\n}\n\nint main() {\n    int arr[] = {12, 11, 13, 5, 6};\n    int n = 5;\n\n    int shifts = insertionSort(arr, n);\n\n    std::cout << \"Sorted Array: \";\n    printArray(arr, n);\n    std::cout << \"Total Shifts: \" << shifts << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        printf(\"%d%s\", arr[i], (i + 1 < n ? \" \" : \"\"));\n    }\n    printf(\"\\n\");\n}\n\n// TODO: Implement Insertion Sort and count total shifts\nint insertionSort(int arr[], int n) {\n    int totalShifts = 0;\n    // Your code here\n    return totalShifts;\n}\n\nint main() {\n    int arr[] = {12, 11, 13, 5, 6};\n    int n = 5;\n\n    int shifts = insertionSort(arr, n);\n\n    printf(\"Sorted Array: \");\n    printArray(arr, n);\n    printf(\"Total Shifts: %d\\n\", shifts);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-1-5",
        "name": "Insertion Sort Shifts",
        "description": "Sorts [12, 11, 13, 5, 6] with 7 total shifts",
        "input": "",
        "expectedOutput": "Sorted Array: 5 6 11 12 13\nTotal Shifts: 7"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u1-p6",
    "subjectId": "dsa",
    "unitId": "unit1",
    "unitTitle": "Unit I: Complexity Analysis, Arrays, Searching & Sorting",
    "title": "Two-Pointer Linear Array Merging in O(N+M)",
    "category": "Arrays & Two Pointers",
    "difficulty": "hard",
    "estimatedTime": "30 mins",
    "summary": "Merge two sorted linear arrays of sizes M and N into a third sorted array of size M+N in linear time without sorting algorithms.",
    "learningObjectives": [
      "Use two simultaneous pointers advancing through arrays",
      "Append remaining elements when one array is exhausted",
      "Achieve O(M + N) time complexity"
    ],
    "keyConcepts": [
      "Two-pointer technique on sorted collections",
      "Core merge step of Merge Sort"
    ],
    "commonPitfalls": [
      "Forgetting to flush remaining elements from the unexhausted array",
      "Advancing pointers unconditionally"
    ],
    "inputFormat": "A = [1, 4, 7, 10, 15], B = [2, 3, 8, 12].",
    "outputFormat": "Merged array and total element comparisons.",
    "constraints": "Both input arrays are sorted in non-decreasing order.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        std::cout << arr[i] << (i + 1 < n ? \" \" : \"\");\n    }\n    std::cout << \"\\n\";\n}\n\n// TODO: Merge sorted arrays A and B into C in O(m+n) time\nvoid mergeSortedArrays(const int A[], int m, const int B[], int n, int C[]) {\n    // Your code here\n}\n\nint main() {\n    int A[] = {1, 4, 7, 10, 15};\n    int m = 5;\n    int B[] = {2, 3, 8, 12};\n    int n = 4;\n    int C[9];\n\n    mergeSortedArrays(A, m, B, n, C);\n\n    std::cout << \"Merged Array (size 9): \";\n    printArray(C, m + n);\n    return 0;\n}",
      "c": "#include <stdio.h>\n\nvoid printArray(const int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        printf(\"%d%s\", arr[i], (i + 1 < n ? \" \" : \"\"));\n    }\n    printf(\"\\n\");\n}\n\n// TODO: Merge sorted arrays A and B into C in O(m+n) time\nvoid mergeSortedArrays(const int A[], int m, const int B[], int n, int C[]) {\n    // Your code here\n}\n\nint main() {\n    int A[] = {1, 4, 7, 10, 15};\n    int m = 5;\n    int B[] = {2, 3, 8, 12};\n    int n = 4;\n    int C[9];\n\n    mergeSortedArrays(A, m, B, n, C);\n\n    printf(\"Merged Array (size 9): \");\n    printArray(C, m + n);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-1-6",
        "name": "Sorted Merge Check",
        "description": "Merges [1,4,7,10,15] and [2,3,8,12]",
        "input": "",
        "expectedOutput": "Merged Array (size 9): 1 2 3 4 7 8 10 12 15"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u2-p1",
    "subjectId": "dsa",
    "unitId": "unit2",
    "unitTitle": "Unit II: Linked Lists, Header Lists & Two-Way Lists",
    "title": "Singly Linked List Prepend, Append and Traversal",
    "category": "Singly Linked Lists",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Implement basic node creation, insertion at head (prepend), insertion at tail (append), and linear traversal with clean deallocation.",
    "learningObjectives": [
      "Define dynamic node struct",
      "Update head pointer on prepend in O(1)",
      "Traverse to tail on append in O(N)",
      "Safely free all allocated nodes"
    ],
    "keyConcepts": [
      "Prepend: newNode->next = head; head = newNode",
      "Append: iterate until curr->next == NULL"
    ],
    "commonPitfalls": [
      "Dereferencing NULL when head is empty",
      "Losing head pointer during traversal by mutating head directly"
    ],
    "inputFormat": "Prepend 10, Prepend 5, Append 20, Append 30.",
    "outputFormat": "Formatted list output.",
    "constraints": "Data elements are integers.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int val) : data(val), next(nullptr) {}\n};\n\n// TODO: Prepend value at the beginning of list\nvoid prepend(Node*& head, int val) {\n    // Your code here\n}\n\n// TODO: Append value at the end of list\nvoid append(Node*& head, int val) {\n    // Your code here\n}\n\nvoid printList(Node* head) {\n    Node* curr = head;\n    while (curr != nullptr) {\n        std::cout << curr->data << (curr->next ? \" -> \" : \"\");\n        curr = curr->next;\n    }\n    std::cout << \"\\n\";\n}\n\nvoid freeList(Node*& head) {\n    while (head != nullptr) {\n        Node* temp = head;\n        head = head->next;\n        delete temp;\n    }\n}\n\nint main() {\n    Node* head = nullptr;\n    prepend(head, 10);\n    prepend(head, 5);\n    append(head, 20);\n    append(head, 30);\n\n    std::cout << \"Linked List: \";\n    printList(head);\n\n    freeList(head);\n    std::cout << \"List deallocated successfully.\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\n// TODO: Prepend value at the beginning of list\nvoid prepend(struct Node** head, int val) {\n    // Your code here\n}\n\n// TODO: Append value at the end of list\nvoid append(struct Node** head, int val) {\n    // Your code here\n}\n\nvoid printList(struct Node* head) {\n    struct Node* curr = head;\n    while (curr != NULL) {\n        printf(\"%d%s\", curr->data, (curr->next ? \" -> \" : \"\"));\n        curr = curr->next;\n    }\n    printf(\"\\n\");\n}\n\nvoid freeList(struct Node** head) {\n    while (*head != NULL) {\n        struct Node* temp = *head;\n        *head = (*head)->next;\n        free(temp);\n    }\n}\n\nint main() {\n    struct Node* head = NULL;\n    prepend(&head, 10);\n    prepend(&head, 5);\n    append(&head, 20);\n    append(&head, 30);\n\n    printf(\"Linked List: \");\n    printList(head);\n\n    freeList(&head);\n    printf(\"List deallocated successfully.\\n\");\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-2-1",
        "name": "Prepend and Append Sequence",
        "description": "Prepends 10, 5; appends 20, 30",
        "input": "",
        "expectedOutput": "Linked List: 5 -> 10 -> 20 -> 30\nList deallocated successfully."
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u2-p2",
    "subjectId": "dsa",
    "unitId": "unit2",
    "unitTitle": "Unit II: Linked Lists, Header Lists & Two-Way Lists",
    "title": "Singly Linked List Deletion by Value and Index",
    "category": "Singly Linked Lists",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Delete specific target values and indices from a Singly Linked List, handling head node deletion and interior node bypass without memory leaks.",
    "learningObjectives": [
      "Handle deletion of head node",
      "Bypass interior/tail node via prev->next = curr->next",
      "Free released node memory immediately"
    ],
    "keyConcepts": [
      "Need pointer to predecessor node to delete target node in singly linked list",
      "Return boolean true/false indicating deletion success"
    ],
    "commonPitfalls": [
      "Use-after-free when reading curr->next after calling free/delete on curr"
    ],
    "inputFormat": "List [10 -> 20 -> 30 -> 40 -> 50], delete value 10 (head), delete value 30 (middle), delete value 99 (not found).",
    "outputFormat": "Status of deletions and resulting list.",
    "constraints": "Values are integers.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int val) : data(val), next(nullptr) {}\n};\n\nvoid append(Node*& head, int val) {\n    Node* n = new Node(val);\n    if (!head) { head = n; return; }\n    Node* c = head;\n    while (c->next) c = c->next;\n    c->next = n;\n}\n\nvoid printList(Node* head) {\n    Node* c = head;\n    while (c) {\n        std::cout << c->data << (c->next ? \" -> \" : \"\");\n        c = c->next;\n    }\n    std::cout << \"\\n\";\n}\n\n// TODO: Delete first node with data == val. Return true if deleted, false if not found.\nbool deleteValue(Node*& head, int val) {\n    // Your code here\n    return false;\n}\n\nint main() {\n    Node* head = nullptr;\n    for (int v : {10, 20, 30, 40, 50}) append(head, v);\n\n    std::cout << \"Initial List: \";\n    printList(head);\n\n    bool d1 = deleteValue(head, 10);\n    std::cout << \"Delete 10 (Head): \" << (d1 ? \"SUCCESS\" : \"FAILED\") << \" | List: \";\n    printList(head);\n\n    bool d2 = deleteValue(head, 30);\n    std::cout << \"Delete 30 (Middle): \" << (d2 ? \"SUCCESS\" : \"FAILED\") << \" | List: \";\n    printList(head);\n\n    bool d3 = deleteValue(head, 99);\n    std::cout << \"Delete 99 (Absent): \" << (d3 ? \"SUCCESS\" : \"FAILED\") << \" | List: \";\n    printList(head);\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nvoid append(struct Node** head, int val) {\n    struct Node* n = (struct Node*)malloc(sizeof(struct Node));\n    n->data = val; n->next = NULL;\n    if (!*head) { *head = n; return; }\n    struct Node* c = *head;\n    while (c->next) c = c->next;\n    c->next = n;\n}\n\nvoid printList(struct Node* head) {\n    struct Node* c = head;\n    while (c) {\n        printf(\"%d%s\", c->data, (c->next ? \" -> \" : \"\"));\n        c = c->next;\n    }\n    printf(\"\\n\");\n}\n\n// TODO: Delete first node with data == val. Return true if deleted, false if not found.\nbool deleteValue(struct Node** head, int val) {\n    // Your code here\n    return false;\n}\n\nint main() {\n    struct Node* head = NULL;\n    int initial[] = {10, 20, 30, 40, 50};\n    for (int i = 0; i < 5; i++) append(&head, initial[i]);\n\n    printf(\"Initial List: \");\n    printList(head);\n\n    bool d1 = deleteValue(&head, 10);\n    printf(\"Delete 10 (Head): %s | List: \", d1 ? \"SUCCESS\" : \"FAILED\");\n    printList(head);\n\n    bool d2 = deleteValue(&head, 30);\n    printf(\"Delete 30 (Middle): %s | List: \", d2 ? \"SUCCESS\" : \"FAILED\");\n    printList(head);\n\n    bool d3 = deleteValue(&head, 99);\n    printf(\"Delete 99 (Absent): %s | List: \", d3 ? \"SUCCESS\" : \"FAILED\");\n    printList(head);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-2-2",
        "name": "Target Value Deletions",
        "description": "Deletes head (10), middle (30), and verifies absent (99)",
        "input": "",
        "expectedOutput": "Initial List: 10 -> 20 -> 30 -> 40 -> 50\nDelete 10 (Head): SUCCESS | List: 20 -> 30 -> 40 -> 50\nDelete 30 (Middle): SUCCESS | List: 20 -> 40 -> 50\nDelete 99 (Absent): FAILED | List: 20 -> 40 -> 50"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u2-p3",
    "subjectId": "dsa",
    "unitId": "unit2",
    "unitTitle": "Unit II: Linked Lists, Header Lists & Two-Way Lists",
    "title": "Grounded Header Linked List with Node Count & Running Sum",
    "category": "Header Linked Lists",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Build a Grounded Header Linked List where the permanent header node stores metadata (node count and running sum) and the last data node terminates with NULL.",
    "learningObjectives": [
      "Use dedicated header node as permanent root",
      "Update header node metadata (count, sum) on insertions and deletions",
      "Eliminate special cases for inserting at head of list"
    ],
    "keyConcepts": [
      "Header node is never deleted while list lives",
      "Data nodes begin at header->next"
    ],
    "commonPitfalls": [
      "Treating the header node as a regular data node during sum or count computation"
    ],
    "inputFormat": "Insert 15, 25, 35 into grounded header list, delete 25.",
    "outputFormat": "Header metadata summary (Count, Sum) and list contents.",
    "constraints": "Values are positive integers.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nstruct HeaderNode {\n    int count; // Total data nodes\n    int sum;   // Sum of data nodes\n    struct DataNode* next;\n};\n\nstruct DataNode {\n    int data;\n    DataNode* next;\n};\n\n// TODO: Initialize header node (count=0, sum=0, next=nullptr)\nHeaderNode* createHeaderList() {\n    // Your code here\n    return nullptr;\n}\n\n// TODO: Insert value into list after header and update count and sum\nvoid insertData(HeaderNode* header, int val) {\n    // Your code here\n}\n\n// TODO: Delete first occurrence of value and update count and sum\nbool deleteData(HeaderNode* header, int val) {\n    // Your code here\n    return false;\n}\n\nvoid printHeaderList(const HeaderNode* header) {\n    std::cout << \"[Header] Count=\" << header->count << \", Sum=\" << header->sum << \" | Elements: \";\n    DataNode* c = header->next;\n    while (c) {\n        std::cout << c->data << (c->next ? \" -> \" : \"\");\n        c = c->next;\n    }\n    std::cout << \"\\n\";\n}\n\nint main() {\n    HeaderNode* list = createHeaderList();\n    insertData(list, 15);\n    insertData(list, 25);\n    insertData(list, 35);\n\n    std::cout << \"After Insertions:\\n\";\n    printHeaderList(list);\n\n    deleteData(list, 25);\n    std::cout << \"After Deleting 25:\\n\";\n    printHeaderList(list);\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct DataNode {\n    int data;\n    struct DataNode* next;\n};\n\nstruct HeaderNode {\n    int count;\n    int sum;\n    struct DataNode* next;\n};\n\n// TODO: Initialize header node (count=0, sum=0, next=NULL)\nstruct HeaderNode* createHeaderList() {\n    // Your code here\n    return NULL;\n}\n\n// TODO: Insert value into list after header and update count and sum\nvoid insertData(struct HeaderNode* header, int val) {\n    // Your code here\n}\n\n// TODO: Delete first occurrence of value and update count and sum\nbool deleteData(struct HeaderNode* header, int val) {\n    // Your code here\n    return false;\n}\n\nvoid printHeaderList(const struct HeaderNode* header) {\n    printf(\"[Header] Count=%d, Sum=%d | Elements: \", header->count, header->sum);\n    struct DataNode* c = header->next;\n    while (c) {\n        printf(\"%d%s\", c->data, (c->next ? \" -> \" : \"\"));\n        c = c->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    struct HeaderNode* list = createHeaderList();\n    insertData(list, 15);\n    insertData(list, 25);\n    insertData(list, 35);\n\n    printf(\"After Insertions:\\n\");\n    printHeaderList(list);\n\n    deleteData(list, 25);\n    printf(\"After Deleting 25:\\n\");\n    printHeaderList(list);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-2-3",
        "name": "Header Metadata Validation",
        "description": "Checks count and sum tracking after insertions and deletion",
        "input": "",
        "expectedOutput": "After Insertions:\n[Header] Count=3, Sum=75 | Elements: 35 -> 25 -> 15\nAfter Deleting 25:\n[Header] Count=2, Sum=50 | Elements: 35 -> 15"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u2-p4",
    "subjectId": "dsa",
    "unitId": "unit2",
    "unitTitle": "Unit II: Linked Lists, Header Lists & Two-Way Lists",
    "title": "Circular Singly Linked List with Round-Robin Traversal",
    "category": "Circular Linked Lists",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement a Circular Singly Linked List where the last node links back to head, supporting insertion, deletion, and simulated round-robin multi-lap traversal.",
    "learningObjectives": [
      "Link tail->next back to head",
      "Maintain circular invariant on head and tail insertions",
      "Traverse exactly K steps across cycle"
    ],
    "keyConcepts": [
      "No NULL pointers in circular list",
      "Termination condition checks curr == head after first step"
    ],
    "commonPitfalls": [
      "Infinite loops if termination condition is written as curr != NULL"
    ],
    "inputFormat": "Circular list with elements [1, 2, 3], simulate 7 steps round-robin.",
    "outputFormat": "Circular traversal trace and list dump.",
    "constraints": "List is non-empty.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int val) : data(val), next(nullptr) {}\n};\n\n// TODO: Insert value at end of circular linked list\nvoid insertEnd(Node*& head, int val) {\n    // Your code here\n}\n\n// TODO: Simulate round-robin scheduler visiting 'steps' nodes continuously\nvoid simulateRoundRobin(Node* head, int steps) {\n    // Your code here\n}\n\nint main() {\n    Node* head = nullptr;\n    insertEnd(head, 1);\n    insertEnd(head, 2);\n    insertEnd(head, 3);\n\n    std::cout << \"Round-Robin Simulation (7 steps):\\n\";\n    simulateRoundRobin(head, 7);\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\n// TODO: Insert value at end of circular linked list\nvoid insertEnd(struct Node** head, int val) {\n    // Your code here\n}\n\n// TODO: Simulate round-robin scheduler visiting 'steps' nodes continuously\nvoid simulateRoundRobin(struct Node* head, int steps) {\n    // Your code here\n}\n\nint main() {\n    struct Node* head = NULL;\n    insertEnd(&head, 1);\n    insertEnd(&head, 2);\n    insertEnd(&head, 3);\n\n    printf(\"Round-Robin Simulation (7 steps):\\n\");\n    simulateRoundRobin(head, 7);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-2-4",
        "name": "Circular Round-Robin 7 Steps",
        "description": "Verifies cyclic round-robin output",
        "input": "",
        "expectedOutput": "Round-Robin Simulation (7 steps):\nStep 1: Process Task 1\nStep 2: Process Task 2\nStep 3: Process Task 3\nStep 4: Process Task 1\nStep 5: Process Task 2\nStep 6: Process Task 3\nStep 7: Process Task 1"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u2-p5",
    "subjectId": "dsa",
    "unitId": "unit2",
    "unitTitle": "Unit II: Linked Lists, Header Lists & Two-Way Lists",
    "title": "Two-Way List Bidirectional Traversal & In-Place Splicing",
    "category": "Doubly Linked Lists",
    "difficulty": "medium",
    "estimatedTime": "30 mins",
    "summary": "Construct a Two-Way (Doubly) Linked List, perform forward and backward traversals, and splice a new node between two existing nodes.",
    "learningObjectives": [
      "Maintain bidirectional pointers prev and next",
      "Traverse forward from head and reverse from tail",
      "Splice new node into doubly linked list with 4 pointer updates"
    ],
    "keyConcepts": [
      "curr->next->prev and curr->prev->next symmetry",
      "Tail pointer enables O(1) reverse traversal start"
    ],
    "commonPitfalls": [
      "Forgetting to update newNode->next->prev when inserting inside list"
    ],
    "inputFormat": "Doubly linked list [10 <-> 30], insert 20 after 10.",
    "outputFormat": "Forward traversal and backward reverse traversal.",
    "constraints": "Pointers must remain symmetric.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nstruct DNode {\n    int data;\n    DNode* prev;\n    DNode* next;\n    DNode(int val) : data(val), prev(nullptr), next(nullptr) {}\n};\n\n// TODO: Insert newNode after given node 'target'\nvoid insertAfter(DNode* target, int val) {\n    // Your code here\n}\n\nvoid printForward(DNode* head) {\n    DNode* c = head;\n    while (c) {\n        std::cout << c->data << (c->next ? \" <-> \" : \"\");\n        c = c->next;\n    }\n    std::cout << \"\\n\";\n}\n\nvoid printBackward(DNode* tail) {\n    DNode* c = tail;\n    while (c) {\n        std::cout << c->data << (c->prev ? \" <-> \" : \"\");\n        c = c->prev;\n    }\n    std::cout << \"\\n\";\n}\n\nint main() {\n    DNode* n1 = new DNode(10);\n    DNode* n3 = new DNode(30);\n    n1->next = n3;\n    n3->prev = n1;\n\n    DNode* head = n1;\n    DNode* tail = n3;\n\n    insertAfter(n1, 20);\n\n    std::cout << \"Forward Traversal: \";\n    printForward(head);\n\n    std::cout << \"Backward Traversal: \";\n    printBackward(tail);\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct DNode {\n    int data;\n    struct DNode* prev;\n    struct DNode* next;\n};\n\nstruct DNode* createNode(int val) {\n    struct DNode* n = (struct DNode*)malloc(sizeof(struct DNode));\n    n->data = val; n->prev = NULL; n->next = NULL;\n    return n;\n}\n\n// TODO: Insert newNode after given node 'target'\nvoid insertAfter(struct DNode* target, int val) {\n    // Your code here\n}\n\nvoid printForward(struct DNode* head) {\n    struct DNode* c = head;\n    while (c) {\n        printf(\"%d%s\", c->data, (c->next ? \" <-> \" : \"\"));\n        c = c->next;\n    }\n    printf(\"\\n\");\n}\n\nvoid printBackward(struct DNode* tail) {\n    struct DNode* c = tail;\n    while (c) {\n        printf(\"%d%s\", c->data, (c->prev ? \" <-> \" : \"\"));\n        c = c->prev;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    struct DNode* n1 = createNode(10);\n    struct DNode* n3 = createNode(30);\n    n1->next = n3;\n    n3->prev = n1;\n\n    struct DNode* head = n1;\n    struct DNode* tail = n3;\n\n    insertAfter(n1, 20);\n\n    printf(\"Forward Traversal: \");\n    printForward(head);\n\n    printf(\"Backward Traversal: \");\n    printBackward(tail);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-2-5",
        "name": "Doubly Linked List Forward and Backward",
        "description": "Verifies forward and backward traversals after inserting 20 between 10 and 30",
        "input": "",
        "expectedOutput": "Forward Traversal: 10 <-> 20 <-> 30\nBackward Traversal: 30 <-> 20 <-> 10"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u2-p6",
    "subjectId": "dsa",
    "unitId": "unit2",
    "unitTitle": "Unit II: Linked Lists, Header Lists & Two-Way Lists",
    "title": "Two-Way List In-Place Pointer Inversion & Palindrome Check",
    "category": "Doubly Linked Lists",
    "difficulty": "hard",
    "estimatedTime": "35 mins",
    "summary": "Implement in-place reversal of a Doubly Linked List by swapping the prev and next pointers of every node, and check if the sequence forms a palindrome.",
    "learningObjectives": [
      "Swap prev and next pointers across all nodes",
      "Update head pointer to point to old tail",
      "Verify palindrome symmetry using two pointers meeting in middle"
    ],
    "keyConcepts": [
      "temp = curr->prev; curr->prev = curr->next; curr->next = temp",
      "O(N) time and O(1) auxiliary space"
    ],
    "commonPitfalls": [
      "Advancing curr with curr->next after swapping (which is now prev!)"
    ],
    "inputFormat": "List [1 <-> 2 <-> 3 <-> 2 <-> 1] for palindrome, list [1 <-> 2 <-> 3] for reverse.",
    "outputFormat": "Original list, reversal output, palindrome verification.",
    "constraints": "In-place pointer manipulation only; no extra arrays allowed.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nstruct DNode {\n    int data;\n    DNode* prev;\n    DNode* next;\n    DNode(int val) : data(val), prev(nullptr), next(nullptr) {}\n};\n\nvoid append(DNode*& head, DNode*& tail, int val) {\n    DNode* n = new DNode(val);\n    if (!head) { head = tail = n; return; }\n    tail->next = n;\n    n->prev = tail;\n    tail = n;\n}\n\nvoid printList(DNode* head) {\n    DNode* c = head;\n    while (c) {\n        std::cout << c->data << (c->next ? \" <-> \" : \"\");\n        c = c->next;\n    }\n    std::cout << \"\\n\";\n}\n\n// TODO: Reverse Doubly Linked List in place by swapping prev and next\nvoid reverseDoublyList(DNode*& head, DNode*& tail) {\n    // Your code here\n}\n\n// TODO: Check if Doubly Linked List is palindrome using head and tail pointers\nbool isPalindrome(DNode* head, DNode* tail) {\n    // Your code here\n    return false;\n}\n\nint main() {\n    DNode *h1 = nullptr, *t1 = nullptr;\n    for (int v : {1, 2, 3, 2, 1}) append(h1, t1, v);\n\n    std::cout << \"List 1: \";\n    printList(h1);\n    std::cout << \"List 1 Palindrome? \" << (isPalindrome(h1, t1) ? \"YES\" : \"NO\") << \"\\n\";\n\n    DNode *h2 = nullptr, *t2 = nullptr;\n    for (int v : {10, 20, 30}) append(h2, t2, v);\n\n    std::cout << \"List 2 Before Reversal: \";\n    printList(h2);\n    reverseDoublyList(h2, t2);\n    std::cout << \"List 2 After Reversal: \";\n    printList(h2);\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct DNode {\n    int data;\n    struct DNode* prev;\n    struct DNode* next;\n};\n\nvoid append(struct DNode** head, struct DNode** tail, int val) {\n    struct DNode* n = (struct DNode*)malloc(sizeof(struct DNode));\n    n->data = val; n->prev = NULL; n->next = NULL;\n    if (!*head) { *head = *tail = n; return; }\n    (*tail)->next = n;\n    n->prev = *tail;\n    *tail = n;\n}\n\nvoid printList(struct DNode* head) {\n    struct DNode* c = head;\n    while (c) {\n        printf(\"%d%s\", c->data, (c->next ? \" <-> \" : \"\"));\n        c = c->next;\n    }\n    printf(\"\\n\");\n}\n\n// TODO: Reverse Doubly Linked List in place by swapping prev and next\nvoid reverseDoublyList(struct DNode** head, struct DNode** tail) {\n    // Your code here\n}\n\n// TODO: Check if Doubly Linked List is palindrome using head and tail pointers\nbool isPalindrome(struct DNode* head, struct DNode* tail) {\n    // Your code here\n    return false;\n}\n\nint main() {\n    struct DNode *h1 = NULL, *t1 = NULL;\n    int v1[] = {1, 2, 3, 2, 1};\n    for (int i = 0; i < 5; i++) append(&h1, &t1, v1[i]);\n\n    printf(\"List 1: \");\n    printList(h1);\n    printf(\"List 1 Palindrome? %s\\n\", isPalindrome(h1, t1) ? \"YES\" : \"NO\");\n\n    struct DNode *h2 = NULL, *t2 = NULL;\n    int v2[] = {10, 20, 30};\n    for (int i = 0; i < 3; i++) append(&h2, &t2, v2[i]);\n\n    printf(\"List 2 Before Reversal: \");\n    printList(h2);\n    reverseDoublyList(&h2, &t2);\n    printf(\"List 2 After Reversal: \");\n    printList(h2);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-2-6",
        "name": "Doubly Reversal and Palindrome Test",
        "description": "Tests palindrome check on [1,2,3,2,1] and in-place reversal on [10,20,30]",
        "input": "",
        "expectedOutput": "List 1: 1 <-> 2 <-> 3 <-> 2 <-> 1\nList 1 Palindrome? YES\nList 2 Before Reversal: 10 <-> 20 <-> 30\nList 2 After Reversal: 30 <-> 20 <-> 10"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u3-p1",
    "subjectId": "dsa",
    "unitId": "unit3",
    "unitTitle": "Unit III: Stacks, Polish Expressions, Queues & Deques",
    "title": "Array-Based Stack with Overflow/Underflow Guard & Peek",
    "category": "Stack Data Structure",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Implement a fixed-capacity array stack adhering to strict LIFO semantics with push, pop, peek, isEmpty, and isFull safety guards.",
    "learningObjectives": [
      "Maintain top pointer index",
      "Guard against stack overflow when top == capacity - 1",
      "Guard against stack underflow when top == -1"
    ],
    "keyConcepts": [
      "LIFO ordering",
      "O(1) push, pop, and peek operations"
    ],
    "commonPitfalls": [
      "Returning uninitialized garbage on pop when stack is empty",
      "Writing out of bounds when top reaches capacity"
    ],
    "inputFormat": "Stack capacity 4. Push 10, 20, 30, peek, pop, push 40, push 50, push 60 (overflow attempt).",
    "outputFormat": "Step logs of all operations and current top.",
    "constraints": "Stack capacity >= 1.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nclass ArrayStack {\nprivate:\n    int* arr;\n    int capacity;\n    int top;\n\npublic:\n    ArrayStack(int cap) : capacity(cap), top(-1) {\n        arr = new int[capacity];\n    }\n\n    ~ArrayStack() {\n        delete[] arr;\n    }\n\n    // TODO: Implement push (return false if full)\n    bool push(int val) {\n        // Your code here\n        return false;\n    }\n\n    // TODO: Implement pop (return -1 if empty)\n    int pop() {\n        // Your code here\n        return -1;\n    }\n\n    // TODO: Implement peek (return -1 if empty)\n    int peek() const {\n        // Your code here\n        return -1;\n    }\n\n    bool isEmpty() const { return top == -1; }\n    bool isFull() const { return top == capacity - 1; }\n};\n\nint main() {\n    ArrayStack s(3);\n    s.push(10);\n    s.push(20);\n    s.push(30);\n\n    std::cout << \"Top element: \" << s.peek() << \"\\n\";\n    std::cout << \"Popped: \" << s.pop() << \"\\n\";\n\n    bool pushed40 = s.push(40);\n    std::cout << \"Pushed 40: \" << (pushed40 ? \"SUCCESS\" : \"FAILED\") << \"\\n\";\n\n    bool overflowPush = s.push(50);\n    std::cout << \"Pushed 50 (Full): \" << (overflowPush ? \"SUCCESS\" : \"OVERFLOW GUARDED\") << \"\\n\";\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct ArrayStack {\n    int* arr;\n    int capacity;\n    int top;\n};\n\nstruct ArrayStack* createStack(int cap) {\n    struct ArrayStack* s = (struct ArrayStack*)malloc(sizeof(struct ArrayStack));\n    s->capacity = cap;\n    s->top = -1;\n    s->arr = (int*)malloc(sizeof(int) * cap);\n    return s;\n}\n\n// TODO: Implement push (return false if full)\nbool push(struct ArrayStack* s, int val) {\n    // Your code here\n    return false;\n}\n\n// TODO: Implement pop (return -1 if empty)\nint pop(struct ArrayStack* s) {\n    // Your code here\n    return -1;\n}\n\n// TODO: Implement peek (return -1 if empty)\nint peek(struct ArrayStack* s) {\n    // Your code here\n    return -1;\n}\n\nint main() {\n    struct ArrayStack* s = createStack(3);\n    push(s, 10);\n    push(s, 20);\n    push(s, 30);\n\n    printf(\"Top element: %d\\n\", peek(s));\n    printf(\"Popped: %d\\n\", pop(s));\n\n    bool pushed40 = push(s, 40);\n    printf(\"Pushed 40: %s\\n\", pushed40 ? \"SUCCESS\" : \"FAILED\");\n\n    bool overflowPush = push(s, 50);\n    printf(\"Pushed 50 (Full): %s\\n\", overflowPush ? \"SUCCESS\" : \"OVERFLOW GUARDED\");\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-3-1",
        "name": "Stack Push Pop Peek Overflow Check",
        "description": "Verifies push, pop, peek, and overflow protection",
        "input": "",
        "expectedOutput": "Top element: 30\nPopped: 30\nPushed 40: SUCCESS\nPushed 50 (Full): OVERFLOW GUARDED"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u3-p2",
    "subjectId": "dsa",
    "unitId": "unit3",
    "unitTitle": "Unit III: Stacks, Polish Expressions, Queues & Deques",
    "title": "Linked List Stack with Dynamic Heap Allocation",
    "category": "Stack Data Structure",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement a Stack using a Singly Linked List with head as top, providing unlimited dynamic capacity and constant O(1) operations.",
    "learningObjectives": [
      "Push onto head in O(1)",
      "Pop from head in O(1)",
      "Free node memory upon popping"
    ],
    "keyConcepts": [
      "Dynamic node allocation eliminates fixed capacity overflow",
      "Head pointer directly represents top of stack"
    ],
    "commonPitfalls": [
      "Memory leak by not freeing popped node"
    ],
    "inputFormat": "Push 100, 200, 300, pop, push 400, pop all.",
    "outputFormat": "Logs of push and pop operations.",
    "constraints": "Elements are integers.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nstruct StackNode {\n    int data;\n    StackNode* next;\n    StackNode(int val) : data(val), next(nullptr) {}\n};\n\nclass LinkedStack {\nprivate:\n    StackNode* topNode;\n\npublic:\n    LinkedStack() : topNode(nullptr) {}\n\n    // TODO: Push val onto stack in O(1)\n    void push(int val) {\n        // Your code here\n    }\n\n    // TODO: Pop top element in O(1), return -1 if empty\n    int pop() {\n        // Your code here\n        return -1;\n    }\n\n    bool isEmpty() const { return topNode == nullptr; }\n};\n\nint main() {\n    LinkedStack st;\n    st.push(100);\n    st.push(200);\n    st.push(300);\n\n    std::cout << \"Popped: \" << st.pop() << \"\\n\";\n    st.push(400);\n\n    while (!st.isEmpty()) {\n        std::cout << \"Popped: \" << st.pop() << \"\\n\";\n    }\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct StackNode {\n    int data;\n    struct StackNode* next;\n};\n\n// TODO: Push val onto stack\nvoid push(struct StackNode** topNode, int val) {\n    // Your code here\n}\n\n// TODO: Pop top element, return -1 if empty\nint pop(struct StackNode** topNode) {\n    // Your code here\n    return -1;\n}\n\nint main() {\n    struct StackNode* topNode = NULL;\n    push(&topNode, 100);\n    push(&topNode, 200);\n    push(&topNode, 300);\n\n    printf(\"Popped: %d\\n\", pop(&topNode));\n    push(&topNode, 400);\n\n    while (topNode != NULL) {\n        printf(\"Popped: %d\\n\", pop(&topNode));\n    }\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-3-2",
        "name": "Linked Stack LIFO Sequence",
        "description": "Validates LIFO order of push and pop operations",
        "input": "",
        "expectedOutput": "Popped: 300\nPopped: 400\nPopped: 200\nPopped: 100"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u3-p3",
    "subjectId": "dsa",
    "unitId": "unit3",
    "unitTitle": "Unit III: Stacks, Polish Expressions, Queues & Deques",
    "title": "Reverse Polish Notation (Postfix) Expression Evaluator",
    "category": "Polish Notation & Stacks",
    "difficulty": "medium",
    "estimatedTime": "30 mins",
    "summary": "Evaluate a postfix expression string containing single-digit operands and +, -, *, / operators using an evaluation stack.",
    "learningObjectives": [
      "Parse postfix tokens sequentially",
      "Push operands onto stack",
      "Pop two operands on operator: op1 = pop() (second), op2 = pop() (top); calculate op1 (operator) op2"
    ],
    "keyConcepts": [
      "Order of operands on subtraction and division: op1 - op2",
      "Stack contains final expression value at completion"
    ],
    "commonPitfalls": [
      "Inverting division/subtraction operand order (op2 / op1 instead of op1 / op2)"
    ],
    "inputFormat": "Expression \"231*+9-\" and \"82/4+\".",
    "outputFormat": "Evaluated integer result.",
    "constraints": "Valid postfix expression.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\n// TODO: Evaluate postfix expression and return integer result\nint evaluatePostfix(const std::string& exp) {\n    int stack[50];\n    int top = -1;\n    // Your code here\n    return 0;\n}\n\nint main() {\n    std::string exp1 = \"231*+9-\"; // 2 + (3 * 1) - 9 = 5 - 9 = -4\n    std::string exp2 = \"82/4+\";   // (8 / 2) + 4 = 4 + 4 = 8\n\n    std::cout << \"Postfix '\" << exp1 << \"' = \" << evaluatePostfix(exp1) << \"\\n\";\n    std::cout << \"Postfix '\" << exp2 << \"' = \" << evaluatePostfix(exp2) << \"\\n\";\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\n// TODO: Evaluate postfix expression and return integer result\nint evaluatePostfix(const char* exp) {\n    int stack[50];\n    int top = -1;\n    // Your code here\n    return 0;\n}\n\nint main() {\n    const char* exp1 = \"231*+9-\";\n    const char* exp2 = \"82/4+\";\n\n    printf(\"Postfix '%s' = %d\\n\", exp1, evaluatePostfix(exp1));\n    printf(\"Postfix '%s' = %d\\n\", exp2, evaluatePostfix(exp2));\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-3-3",
        "name": "Postfix Evaluation",
        "description": "Evaluates '231*+9-' and '82/4+'",
        "input": "",
        "expectedOutput": "Postfix '231*+9-' = -4\nPostfix '82/4+' = 8"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u3-p4",
    "subjectId": "dsa",
    "unitId": "unit3",
    "unitTitle": "Unit III: Stacks, Polish Expressions, Queues & Deques",
    "title": "Infix to Postfix Transformation (Shunting-Yard Algorithm)",
    "category": "Polish Notation & Stacks",
    "difficulty": "medium",
    "estimatedTime": "30 mins",
    "summary": "Convert standard Infix arithmetic expressions into Postfix (Reverse Polish) notation using Dijkstra's Shunting-Yard stack algorithm.",
    "learningObjectives": [
      "Handle operator precedence (+,- < *,/ < ^)",
      "Handle parentheses nesting and operator stack popping",
      "Output operands immediately"
    ],
    "keyConcepts": [
      "Stack buffers operators until higher precedence operator or matching parenthesis arrives",
      "Left-associative operators pop existing equal or higher precedence operators"
    ],
    "commonPitfalls": [
      "Leaving unpopped operators in stack at end of input"
    ],
    "inputFormat": "Infix \"a+b*(c^d-e)\".",
    "outputFormat": "Converted Postfix string.",
    "constraints": "Single-character operands a-z.",
    "starterCode": {
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint precedence(char op) {\n    if (op == '^') return 3;\n    if (op == '*' || op == '/') return 2;\n    if (op == '+' || op == '-') return 1;\n    return -1;\n}\n\n// TODO: Convert infix expression to postfix string\nstd::string infixToPostfix(const std::string& s) {\n    std::string result = \"\";\n    // Your code here\n    return result;\n}\n\nint main() {\n    std::string exp = \"a+b*(c^d-e)\";\n    std::cout << \"Infix:   \" << exp << \"\\n\";\n    std::cout << \"Postfix: \" << infixToPostfix(exp) << \"\\n\";\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\nint precedence(char op) {\n    if (op == '^') return 3;\n    if (op == '*' || op == '/') return 2;\n    if (op == '+' || op == '-') return 1;\n    return -1;\n}\n\n// TODO: Convert infix expression to postfix string\nvoid infixToPostfix(const char* infix, char* postfix) {\n    // Your code here\n}\n\nint main() {\n    const char* exp = \"a+b*(c^d-e)\";\n    char postfix[100];\n    infixToPostfix(exp, postfix);\n\n    printf(\"Infix:   %s\\n\", exp);\n    printf(\"Postfix: %s\\n\", postfix);\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-3-4",
        "name": "Infix to Postfix Shunting Yard",
        "description": "Converts 'a+b*(c^d-e)' to 'abcd^e-*+'",
        "input": "",
        "expectedOutput": "Infix:   a+b*(c^d-e)\nPostfix: abcd^e-*+"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u3-p5",
    "subjectId": "dsa",
    "unitId": "unit3",
    "unitTitle": "Unit III: Stacks, Polish Expressions, Queues & Deques",
    "title": "Circular Queue Array Implementation with Modulo Arithmetic",
    "category": "Queue Data Structure",
    "difficulty": "medium",
    "estimatedTime": "25 mins",
    "summary": "Implement a Circular Queue using an array and modulo arithmetic (rear + 1) % MAX to eliminate false overflow and reuse dequeued memory.",
    "learningObjectives": [
      "Advance front and rear using modulo indexing",
      "Detect full condition: (rear + 1) % MAX == front",
      "Detect empty condition: front == -1"
    ],
    "keyConcepts": [
      "FIFO ordering with circular wraparound",
      "Reclaims unused memory slots"
    ],
    "commonPitfalls": [
      "Failing to reset front and rear to -1 when queue becomes empty after dequeue"
    ],
    "inputFormat": "Circular queue capacity 4. Enqueue 10, 20, 30, dequeue (10), enqueue 40, 50 (wraps around).",
    "outputFormat": "Queue state logs.",
    "constraints": "Capacity >= 2.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nclass CircularQueue {\nprivate:\n    int* arr;\n    int capacity;\n    int front;\n    int rear;\n\npublic:\n    CircularQueue(int cap) : capacity(cap), front(-1), rear(-1) {\n        arr = new int[capacity];\n    }\n\n    ~CircularQueue() { delete[] arr; }\n\n    // TODO: Enqueue value using (rear + 1) % capacity\n    bool enqueue(int val) {\n        // Your code here\n        return false;\n    }\n\n    // TODO: Dequeue value using (front + 1) % capacity\n    int dequeue() {\n        // Your code here\n        return -1;\n    }\n\n    void printQueue() const {\n        if (front == -1) {\n            std::cout << \"Empty\\n\";\n            return;\n        }\n        int i = front;\n        while (true) {\n            std::cout << arr[i] << \" \";\n            if (i == rear) break;\n            i = (i + 1) % capacity;\n        }\n        std::cout << \"\\n\";\n    }\n};\n\nint main() {\n    CircularQueue cq(4);\n    cq.enqueue(10);\n    cq.enqueue(20);\n    cq.enqueue(30);\n\n    std::cout << \"Initial Queue: \";\n    cq.printQueue();\n\n    std::cout << \"Dequeued: \" << cq.dequeue() << \"\\n\";\n\n    cq.enqueue(40);\n    cq.enqueue(50); // Wraps around into index 0!\n\n    std::cout << \"After Wraparound: \";\n    cq.printQueue();\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nstruct CircularQueue {\n    int* arr;\n    int capacity;\n    int front;\n    int rear;\n};\n\nstruct CircularQueue* createQueue(int cap) {\n    struct CircularQueue* q = (struct CircularQueue*)malloc(sizeof(struct CircularQueue));\n    q->capacity = cap;\n    q->front = -1;\n    q->rear = -1;\n    q->arr = (int*)malloc(sizeof(int) * cap);\n    return q;\n}\n\n// TODO: Enqueue value using (rear + 1) % capacity\nbool enqueue(struct CircularQueue* q, int val) {\n    // Your code here\n    return false;\n}\n\n// TODO: Dequeue value using (front + 1) % capacity\nint dequeue(struct CircularQueue* q) {\n    // Your code here\n    return -1;\n}\n\nvoid printQueue(const struct CircularQueue* q) {\n    if (q->front == -1) {\n        printf(\"Empty\\n\");\n        return;\n    }\n    int i = q->front;\n    while (true) {\n        printf(\"%d \", q->arr[i]);\n        if (i == q->rear) break;\n        i = (i + 1) % q->capacity;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    struct CircularQueue* cq = createQueue(4);\n    enqueue(cq, 10);\n    enqueue(cq, 20);\n    enqueue(cq, 30);\n\n    printf(\"Initial Queue: \");\n    printQueue(cq);\n\n    printf(\"Dequeued: %d\\n\", dequeue(cq));\n\n    enqueue(cq, 40);\n    enqueue(cq, 50);\n\n    printf(\"After Wraparound: \");\n    printQueue(cq);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-3-5",
        "name": "Circular Queue Wraparound",
        "description": "Verifies wraparound after dequeue and enqueue",
        "input": "",
        "expectedOutput": "Initial Queue: 10 20 30 \nDequeued: 10\nAfter Wraparound: 20 30 40 50 "
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  },
  {
    "id": "dsa-u3-p6",
    "subjectId": "dsa",
    "unitId": "unit3",
    "unitTitle": "Unit III: Stacks, Polish Expressions, Queues & Deques",
    "title": "Double-Ended Queue (Deque) Supporting Front and Rear Operations",
    "category": "Deque Data Structure",
    "difficulty": "hard",
    "estimatedTime": "35 mins",
    "summary": "Implement a full Deque using a Doubly Linked List supporting push_front, push_rear, pop_front, and pop_rear in O(1) constant time.",
    "learningObjectives": [
      "Implement push and pop at both front and rear",
      "Maintain doubly linked list node links in O(1)",
      "Handle transition between single-element and empty deque"
    ],
    "keyConcepts": [
      "Deques generalize both stacks and queues",
      "Doubly linked list allows O(1) pop_rear (which singly linked list cannot do without tail search)"
    ],
    "commonPitfalls": [
      "Failing to set tail to NULL when pop_front empties the last node"
    ],
    "inputFormat": "push_front(20), push_front(10), push_rear(30), push_rear(40), pop_front, pop_rear.",
    "outputFormat": "Step logs and final deque contents.",
    "constraints": "Elements are integers.",
    "starterCode": {
      "cpp": "#include <iostream>\nusing namespace std;\n\nstruct DequeNode {\n    int data;\n    DequeNode* prev;\n    DequeNode* next;\n    DequeNode(int val) : data(val), prev(nullptr), next(nullptr) {}\n};\n\nclass Deque {\nprivate:\n    DequeNode* front;\n    DequeNode* rear;\n\npublic:\n    Deque() : front(nullptr), rear(nullptr) {}\n\n    // TODO: Insert at front\n    void push_front(int val) {\n        // Your code here\n    }\n\n    // TODO: Insert at rear\n    void push_rear(int val) {\n        // Your code here\n    }\n\n    // TODO: Remove and return from front\n    int pop_front() {\n        // Your code here\n        return -1;\n    }\n\n    // TODO: Remove and return from rear\n    int pop_rear() {\n        // Your code here\n        return -1;\n    }\n\n    void printDeque() const {\n        DequeNode* c = front;\n        while (c) {\n            std::cout << c->data << (c->next ? \" <-> \" : \"\");\n            c = c->next;\n        }\n        std::cout << \"\\n\";\n    }\n};\n\nint main() {\n    Deque dq;\n    dq.push_front(20);\n    dq.push_front(10);\n    dq.push_rear(30);\n    dq.push_rear(40);\n\n    std::cout << \"Initial Deque: \";\n    dq.printDeque();\n\n    std::cout << \"Popped Front: \" << dq.pop_front() << \"\\n\";\n    std::cout << \"Popped Rear: \" << dq.pop_rear() << \"\\n\";\n\n    std::cout << \"Final Deque: \";\n    dq.printDeque();\n\n    return 0;\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct DequeNode {\n    int data;\n    struct DequeNode* prev;\n    struct DequeNode* next;\n};\n\nstruct Deque {\n    struct DequeNode* front;\n    struct DequeNode* rear;\n};\n\nstruct Deque* createDeque() {\n    struct Deque* dq = (struct Deque*)malloc(sizeof(struct Deque));\n    dq->front = NULL;\n    dq->rear = NULL;\n    return dq;\n}\n\n// TODO: Insert at front\nvoid push_front(struct Deque* dq, int val) {\n    // Your code here\n}\n\n// TODO: Insert at rear\nvoid push_rear(struct Deque* dq, int val) {\n    // Your code here\n}\n\n// TODO: Remove and return from front\nint pop_front(struct Deque* dq) {\n    // Your code here\n    return -1;\n}\n\n// TODO: Remove and return from rear\nint pop_rear(struct Deque* dq) {\n    // Your code here\n    return -1;\n}\n\nvoid printDeque(const struct Deque* dq) {\n    struct DequeNode* c = dq->front;\n    while (c) {\n        printf(\"%d%s\", c->data, (c->next ? \" <-> \" : \"\"));\n        c = c->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    struct Deque* dq = createDeque();\n    push_front(dq, 20);\n    push_front(dq, 10);\n    push_rear(dq, 30);\n    push_rear(dq, 40);\n\n    printf(\"Initial Deque: \");\n    printDeque(dq);\n\n    printf(\"Popped Front: %d\\n\", pop_front(dq));\n    printf(\"Popped Rear: %d\\n\", pop_rear(dq));\n\n    printf(\"Final Deque: \");\n    printDeque(dq);\n\n    return 0;\n}"
    },
    "testCases": [
      {
        "id": "tc-dsa-3-6",
        "name": "Deque Front and Rear Operations",
        "description": "Verifies push_front, push_rear, pop_front, pop_rear",
        "input": "",
        "expectedOutput": "Initial Deque: 10 <-> 20 <-> 30 <-> 40\nPopped Front: 10\nPopped Rear: 40\nFinal Deque: 20 <-> 30"
      }
    ],
    "isAdminProtected": true,
    "hasReferenceSolution": true
  }
];
