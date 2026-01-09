import matplotlib.pyplot as plt
import numpy as np

# Style constants
BG_COLOR = '#f9fafb'
GRID_COLOR = '#e5e7eb'
AXIS_COLOR = '#9ca3af'
TEXT_COLOR = '#4b5563'
FUNC1_COLOR = '#2563eb'
FUNC2_COLOR = '#db2777'

def setup_plot():
    fig, ax = plt.subplots(figsize=(6, 6), dpi=100)
    fig.patch.set_facecolor(BG_COLOR)
    ax.set_facecolor(BG_COLOR)
    
    # Grid
    ax.grid(True, which='both', color=GRID_COLOR, linestyle='-', linewidth=1.5)
    ax.set_axisbelow(True)
    
    # Range
    ax.set_xlim(-6, 6)
    ax.set_ylim(-6, 6)
    
    # Spines (Axes)
    ax.spines['left'].set_position('center')
    ax.spines['bottom'].set_position('center')
    ax.spines['right'].set_color('none')
    ax.spines['top'].set_color('none')
    
    ax.spines['left'].set_color(AXIS_COLOR)
    ax.spines['bottom'].set_color(AXIS_COLOR)
    ax.spines['left'].set_linewidth(2.5)
    ax.spines['bottom'].set_linewidth(2.5)
    
    # Ticks
    ax.set_xticks(np.arange(-5, 6, 1))
    ax.set_yticks(np.arange(-5, 6, 1))
    ax.tick_params(axis='both', colors=GRID_COLOR, width=0) # Hide ticks but keep grid
    ax.set_xticklabels([])
    ax.set_yticklabels([])
    
    # Labels (x, y, O)
    ax.text(5.5, -0.8, 'x', color=TEXT_COLOR, fontsize=16, fontweight='bold', fontfamily='Arial')
    ax.text(0.3, 5.5, 'y', color=TEXT_COLOR, fontsize=16, fontweight='bold', fontfamily='Arial')
    ax.text(0.2, -0.8, 'O', color=TEXT_COLOR, fontsize=14, fontweight='bold', fontfamily='Arial')

    return fig, ax

def draw_func(ax, func, color=FUNC1_COLOR):
    x = np.linspace(-6, 6, 400)
    y = func(x)
    # Mask values outside range
    y = np.ma.masked_where((y > 10) | (y < -10), y)
    ax.plot(x, y, color=color, linewidth=2.5)

def save_plot(fig, filename):
    plt.savefig(filename, bbox_inches='tight', facecolor=fig.get_facecolor(), pad_inches=0.1)
    plt.close(fig)

tasks = [
    ('M1-3-3-10_Q10.png', lambda x: x**2 - 4*x + 3),
    ('M1-3-3-10_Q16.png', lambda x: 2*x**2 - 4*x + 3),
    ('M1-3-3-10_Q17.png', lambda x: -x**2 + 2*x - 1),
    ('M1-3-3-10_Q18.png', lambda x: -3*x**2 - 6*x + 2),
    ('M1-3-3-10_Q19.png', lambda x: x**2 - 4*x + 7),
    ('M1-3-3-10_Q20.png', lambda x: x**2 + 2*x - 3),
    ('M1-3-3-10_Q37.png', lambda x: x**2 - 4*x),
    ('M1-3-3-10_Q38.png', lambda x: -x**2 - 4*x),
    ('M1-3-3-10_Q39.png', lambda x: -x**2 - 4*x - 3),
    ('M1-3-3-10_Q40.png', lambda x: x**2 - 4*x + 4),
    ('M1-3-3-10_Q41.png', lambda x: x**2 - 4*x + 5),
    ('M1-3-3-10_Q42.png', lambda x: -x**2 + 2),
    ('M1-3-3-10_Q43.png', lambda x: x**2 - 1),
    ('M1-3-3-10_Q44.png', lambda x: x**2 - 4),
    ('M1-3-3-10_Q45.png', lambda x: x**2 - 6*x + 8),
    ('M1-3-3-10_Q46.png', lambda x: -x**2 + 4),
]

for fname, func in tasks:
    fig, ax = setup_plot()
    draw_func(ax, func)
    save_plot(fig, fname)
    print(f"Generated {fname}")
