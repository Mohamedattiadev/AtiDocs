from setuptools import setup

setup(
    name='pygments-doomone',
    version='0.1',
    packages=['pygments_doomone'],
    entry_points={
        'pygments.styles': [
            'doomone = pygments_doomone.doomone:DoomOneStyle'
        ],
    },
)
