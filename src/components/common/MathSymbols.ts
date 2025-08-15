export const MATH_SYMBOLS = [
  // Wrapper
  { label: "Inline $", value: "$  $" },
  { label: "Block $$", value: "$$\n\n$$" },

  // Brackets
  { label: "( )", value: "( )" },
  { label: "[ ]", value: "[ ]" },
  { label: "{ }", value: "\\{ \\}" },

  // Operations & Relations
  { label: "+", value: "+" },
  { label: "-", value: "-" },
  { label: "×", value: "\\times" },
  { label: "÷", value: "\\div" },
  { label: "^", value: "^{}" },
  { label: "_", value: "_{}" },
  { label: "=", value: "=" },
  { label: "≠", value: "\\neq" },
  { label: "≈", value: "\\approx" },
  { label: "≤", value: "\\le" },
  { label: "≥", value: "\\ge" },
  { label: "!", value: "!" },
  { label: "%", value: "\\%" },
  { label: "mod", value: "\\bmod" },

  // Roots & Exponentials
  { label: "√", value: "\\sqrt{}" },
  { label: "e^x", value: "e^{}" },

  // Algebra
  { label: "|x|", value: "\\lvert  \\rvert" },
  { label: "x²", value: "x^{2}" },
  { label: "x³", value: "x^{3}" },
  { label: "xⁿ", value: "x^{n}" },
  { label: "√x", value: "\\sqrt{x}" },
  { label: "overline", value: "\\overline{}" },

  // Functions
  { label: "f(x)", value: "f(x)" },

  // Exponents & Logarithms
  { label: "log", value: "\\log" },
  { label: "ln", value: "\\ln" },

  // One-variable equations
  { label: "ax+b=0", value: "ax+b=0" },

  // Triangles & Angles
  { label: "sin", value: "\\sin" },
  { label: "cos", value: "\\cos" },
  { label: "tan", value: "\\tan" },

  // Proportions & Similarity
  { label: "∼", value: "\\sim" },

  // Two-variable linear equations
  { label: "ax+by=c", value: "ax+by=c" },

  // Finite sequences
  { label: "a₁, a₂, ..., aₙ", value: "a_1, a_2, \\dots, a_n" },

  // Summation & Product
  { label: "Σ", value: "\\sum" },
  { label: "∏", value: "\\prod" },

  // Calculus
  { label: "∫", value: "\\int" },
  { label: "d/dx", value: "\\frac{d}{dx}" },
  { label: "∂", value: "\\partial" },
  { label: "d²/dx²", value: "\\frac{d^2}{dx^2}" },
  { label: "lim", value: "\\lim" },

  // Geometry
  { label: "∠", value: "\\angle" },
  { label: "⊥", value: "\\perp" },
  { label: "‖", value: "\\parallel" },
  { label: "△", value: "\\triangle" },
  { label: "⊙", value: "\\odot" },
  { label: "⌀", value: "\\oslash" },
  { label: "⦿", value: "\\circledcirc" },
  { label: "arc", value: "\\overset{\\frown}{}" },

  // Infinity
  { label: "∞", value: "\\infty" },

  // Logic / Reasoning
  { label: "∧", value: "\\wedge" },
  { label: "∨", value: "\\vee" },
  { label: "¬", value: "\\neg" },
  { label: "⇒", value: "\\implies" },
  { label: "⇔", value: "\\iff" },
  { label: "∴", value: "\\therefore" },
  { label: "∵", value: "\\because" },
  { label: "□", value: "\\square" },
  { label: "∎", value: "\\blacksquare" },
  { label: "⊢", value: "\\vdash" },
  { label: "⊨", value: "\\models" },
  { label: "⊤", value: "\\top" },
  { label: "⊥", value: "\\bot" },

  // Sets
  { label: "∈", value: "\\in" },
  { label: "⊂", value: "\\subset" },
  { label: "⊆", value: "\\subseteq" },
  { label: "⊄", value: "\\nsubset" },
  { label: "⊃", value: "\\supset" },
  { label: "⊇", value: "\\supseteq" },
  { label: "⊅", value: "\\nsupset" },
  { label: "∉", value: "\\notin" },
  { label: "∋", value: "\\ni" },
  { label: "∪", value: "\\cup" },
  { label: "∩", value: "\\cap" },
  { label: "∅", value: "\\emptyset" },

  // Greek Letters (Lowercase)
  { label: "α", value: "\\alpha" },
  { label: "β", value: "\\beta" },
  { label: "γ", value: "\\gamma" },
  { label: "δ", value: "\\delta" },
  { label: "ε", value: "\\epsilon" },
  { label: "ζ", value: "\\zeta" },
  { label: "η", value: "\\eta" },
  { label: "θ", value: "\\theta" },
  { label: "λ", value: "\\lambda" },
  { label: "μ", value: "\\mu" },
  { label: "ν", value: "\\nu" },
  { label: "ξ", value: "\\xi" },
  { label: "π", value: "\\pi" },
  { label: "ρ", value: "\\rho" },
  { label: "σ", value: "\\sigma" },
  { label: "τ", value: "\\tau" },
  { label: "φ", value: "\\phi" },
  { label: "ψ", value: "\\psi" },
  { label: "ω", value: "\\omega" },

  // Greek Letters (Uppercase)
  { label: "Γ", value: "\\Gamma" },
  { label: "Δ", value: "\\Delta" },
  { label: "Θ", value: "\\Theta" },
  { label: "Λ", value: "\\Lambda" },
  { label: "Ξ", value: "\\Xi" },
  { label: "Π", value: "\\Pi" },
  { label: "Σ", value: "\\Sigma" },
  { label: "Φ", value: "\\Phi" },
  { label: "Ψ", value: "\\Psi" },
  { label: "Ω", value: "\\Omega" },

  // Additional Numbers
  { label: "ℝ", value: "\\mathbb{R}" },
  { label: "ℕ", value: "\\mathbb{N}" },
  { label: "ℤ", value: "\\mathbb{Z}" },
  { label: "ℚ", value: "\\mathbb{Q}" },
  { label: "ℂ", value: "\\mathbb{C}" },

  // Circles & Distance
  { label: "radius r", value: "r" },
  { label: "diameter d", value: "d" },

  // Area & Perimeter
  { label: "Area", value: "A" },
  { label: "Perimeter", value: "P" },

  // Statistics / Probability
  { label: "mean", value: "\\bar{x}" },
  { label: "variance", value: "σ^2" },
  { label: "P(X)", value: "\\Pr(X)" },
  { label: "E[X]", value: "\\mathbb{E}[X]" },
  { label: "Var(X)", value: "\\mathrm{Var}(X)" },
  { label: "Cov(X,Y)", value: "\\mathrm{Cov}(X,Y)" },

  // Special Operators
  { label: "⊕", value: "\\oplus" },
  { label: "⊗", value: "\\otimes" },
  { label: "⊖", value: "\\ominus" },
  { label: "⨁", value: "\\bigoplus" },
  { label: "⨂", value: "\\bigotimes" },

  // Arrows
  { label: "←", value: "\\leftarrow" },
  { label: "→", value: "\\rightarrow" },
  { label: "↑", value: "\\uparrow" },
  { label: "↓", value: "\\downarrow" },
  { label: "↔", value: "\\leftrightarrow" },
  { label: "⇐", value: "\\Leftarrow" },
  { label: "⇒", value: "\\Rightarrow" },
  { label: "⇔", value: "\\Leftrightarrow" },

  // Advanced Calculus
  { label: "∇", value: "\\nabla" },
  { label: "∮", value: "\\oint" },
  { label: "∯", value: "\\oiint" },
];
