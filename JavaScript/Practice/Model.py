import numpy as np
import random as random
import matplotlib.pyplot as plt
import ipywidgets as widgets
from IPython.display import display, clear_output
from ipywidgets import Layout, Button, Box, widgets, interact, interact_manual, fixed
from random import choice

################################
##### Fixed Variables
# Trading volume in USD per year
trading_volume = 500000000*365 
m_initial = 100
################################
##### Slider Variables

### Slider Variable 1: Size of the Asset Base (m) in MM USD
mlabel = widgets.Label(value = "Marketcap of Asset (MM in USD)")
mtext = widgets.IntText(
    value = m_initial,
    description = 'm = '
)
m = widgets.IntSlider(
    min = m_initial,
    max = 2000,
    description='m',
    orientation='vertical'
)
mlink = widgets.jslink((mtext, 'value'), (m, 'value'))

##### Slider Variable 2: Price of the Digital Resource Being Provisioned (p) in $/GB
plabel = widgets.Label(value = "Price per gigabyte of storage provisioned ($/GB)")
ptext = widgets.FloatText(
    value = 0.0125,
    description = 'p = '
)
p = widgets.FloatSlider(
    value = 0.0125,
    min = 0.01,
    max = 4,
    step = 0.005,
    description = 'p',
    continuous_update=True,
    orientation='vertical',
    readout_format='.4f'
)
plink = widgets.jslink((ptext, 'value'), (p, 'value'))

##### Slider Variable 3: Quantity of the Digital Resource Being Provisioned (q) in GB
qlabel = widgets.Label(value = "Amount of Data Available (GB)")
qtext = widgets.IntText(
    description='q = '
)
q = widgets.IntSlider(
    description='q',
    orientation='vertical'
)
qlink = widgets.jslink((qtext, 'value'), (q, 'value'))

##### Slider Result 4: Velocity of the Asset (v)
vlabel = widgets.Label(value = "Velocity of the Asset:")
# vtext = widgets.Text(description = 'v =')
v = widgets.IntSlider(
    continuous_update=True,
    description='v',
    orientation='vertical'
)
# qlink = widgets.jslink((voutput, 'value'), (v, 'value'))

################################
### Button and Output Definition
# Button and Output
button = widgets.Button(description="Calculate")
output = widgets.Output()

################################
### Function Definitions
# Calculation 
def eqn(v1,v2,v3):
    z = v1*v2/v3
    return(z)
# On Button Click    
def on_button_clicked(b):
    result = round(eqn(p.value,q.value,m.value),6)
    with output:
        clear_output()
        print(result)
        

def f(m, b):
    plt.figure()
    x = np.linspace(-10, 10, num=1000)
    plt.plot(x, m * x + b)
    plt.ylim(-5, 5)
    plt.show()

button.on_click(on_button_clicked)

################################
### Box Layout
vbox = widgets.VBox([mlabel,mtext,plabel,ptext,qlabel,qtext])
hbox = widgets.HBox([m,p,q,v])
h1box = widgets.HBox([vlabel,output])
v1box = widgets.VBox([h1box,button])
cbox = widgets.HBox([vbox,hbox,v1box,])
cbox