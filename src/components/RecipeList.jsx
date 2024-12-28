import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import {appetizers} from './Recipes';
import { Typography } from '@mui/material';

export default function RecipeList() {

  const [openList, setOpenList] = useState("");

  const handleSetOpenList = (list) => {
    if(list === openList) {
      setOpenList("");
    } else {
      setOpenList(list);
    }
  }

  return (
    <List
      sx={{ width: '100%'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={() => handleSetOpenList("apps")}
        style={{
          paddingBottom: '1vh'
        }}>
        <ListItemIcon>
        </ListItemIcon>
        {
          openList === "apps" ?
          <strong>Appetizers</strong>
          : 'Appetizers'
        }
      </ListItemButton>

      {/* Appetizer List */}

      {
        openList === "apps" ?
        <div style={{maxHeight: '30vh', overflow: 'auto',
          display: 'flex', justifyContent: 'center', paddingLeft: '5vw'
        }}>
          <List component="nav" aria-labelledby="nested-list-subheader">
            {
              appetizers.map((appetizer) => {
                return(
                  <ListItemButton onClick={() => handleOpenRecipe("apps")}>
                    {appetizer.name}
                  </ListItemButton>
                )
              })
            }
          </List>
        </div>
        : null
      }

      {/* <div sx={{textAlign: 'center'}}>
        <Divider
          sx={{
            opacity: 0.9,
            width: '40vw',
            paddingBottom: '2vh'
          }}
        />
      </div> */}

      <ListItemButton onClick={() => handleSetOpenList("mains")}
        style={{
          paddingBottom: '3vh'
        }}>
        <ListItemIcon>
        </ListItemIcon>
        Main Dishes
      </ListItemButton>

      {/* Mains List */}

      {
        openList === "mains" ? 
        <Collapse>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                Mains
            </ListItemButton>
          </List>
        </Collapse>
        : null
      }

      <ListItemButton onClick={() => handleSetOpenList("desserts")}
        style={{
          paddingBottom: '3vh'
        }}>
        <ListItemIcon>
        </ListItemIcon>
        Desserts
      </ListItemButton>

      <ListItemButton onClick={() => handleSetOpenList("other")}
        style={{
          paddingBottom: '3vh'
        }}>
        <ListItemIcon>
        </ListItemIcon>
          This and That
      </ListItemButton>
    </List>
  );
}