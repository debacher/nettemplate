mod.web_layout.BackendLayouts {
  Einspaltig {
    title = Einspaltig
    icon = fileadmin/nettemplate/Resources/Public/Bilder/lspalten1.png
    config {
      backend_layout {
        colCount = 1
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = Hauptinhalt
                colPos = 0
                allowed = header,text,textpic,image,textmedia,bullets,table,uploads,menu_abstract,menu_categorized_content,menu_categorized_pages,menu_pages,menu_subpages,menu_recently_updated,menu_related_pages,menu_section,menu_section_pages,menu_sitemap,menu_sitemap_pages,shortcut,list,div,html,login,form_formframework,gridelements_pi1
              }
            }
          }
        }
      }
    }
  }
  
  Zweispaltig {
    title = Zweispaltig
    icon = fileadmin/nettemplate/Resources/Public/Bilder/lspalten2.png
    config {
      backend_layout {
        colCount = 3
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = Inhalt unter linkem Menü
                colPos = 1
                allowed = header,text,textpic,image,textmedia,bullets,table,uploads,menu_abstract,menu_categorized_content,menu_categorized_pages,menu_pages,menu_subpages,menu_recently_updated,menu_related_pages,menu_section,menu_section_pages,menu_sitemap,menu_sitemap_pages,shortcut,list,div,html,login,form_formframework,gridelements_pi1
              }
              2 {
                name = Hauptinhalt
                colspan = 2
                colPos = 0
                allowed = header,text,textpic,image,textmedia,bullets,table,uploads,menu_abstract,menu_categorized_content,menu_categorized_pages,menu_pages,menu_subpages,menu_recently_updated,menu_related_pages,menu_section,menu_section_pages,menu_sitemap,menu_sitemap_pages,shortcut,list,div,html,login,form_formframework,gridelements_pi1
              }
            }
          }
        }
      }
    }
  }
  
  Dreispaltig {
    title = Dreispaltig
    icon = fileadmin/nettemplate/Resources/Public/Bilder/lspalten3.png
    config {
      backend_layout {
        colCount = 4
        rowCount = 1
        rows {
          1 {
            columns {
              1 {
                name = Inhalt unter linkem Menü
                colPos = 1
                allowed = undefined
              }
              2 {
                name = Hauptinhalt
                colspan = 2
                colPos = 0
                allowed = undefined
              }
              3 {
                name = Rechte Spalte
                colPos = 2
              }
            }
          }
        }
      }
    }
  }
}        
        
        


